import { Request,Response } from "express";
import { CreateComplimentsService } from "../services/CreateComplimentsService";

class CreateComplimentController {
  async handle(req: Request, res: Response){
    const { tag_id, user_receiver, message } = req.body
    //Utilizando o id de quem vai enviar o elogio ( vindo da autenticação )
    const { user_id } = req

    const createComplimentService = new CreateComplimentsService()

    const compliment = await createComplimentService.execute({
      tag_id,
      user_sender : user_id, //Define o id do usuário que esta enviando o elogio
      user_receiver,
      message
    })
    return res.status(201).json({
      status: "Success",
      message: "Compliments send",
      compliment  
    })
  }
}


export { CreateComplimentController }