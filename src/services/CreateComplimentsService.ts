import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IComplimentsRequest {
  tag_id: string,
  user_sender: string,
  user_receiver: string,
  message: string
}

class CreateComplimentsService {
  async execute({ tag_id, user_sender, user_receiver, message}: IComplimentsRequest){
      const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
      const userRepositories = getCustomRepository(UsersRepositories)

      //Verifica se o elegia esta sendo enviado para sí mesmo
      if(user_sender === user_receiver){
        throw new Error("Cannot compliments yorself!")
      }

      // Verifica se o usuário existe no banco de dados
      const userReceiverExists = await userRepositories.findOne(user_receiver)
      

      if(!userReceiverExists){
        throw new Error("User receiver does not exists!")
      }


      const compliment = complimentsRepositories.create({
        tag_id,
        user_sender,
        user_receiver,
        message
      })
      await complimentsRepositories.save(compliment)

      return compliment
    }
  
}

export { CreateComplimentsService }