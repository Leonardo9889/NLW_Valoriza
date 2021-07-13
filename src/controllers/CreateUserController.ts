import { Request, Response } from "express" // Importando o req e res do express
import { CreateUserService } from "../services/CreateUserService" // Importando a class CreateUserService

class CreateUserController { 
  async  handle(req:Request, res:Response){
    const { name, email, admin, password } = req.body // Recuperando as informaçãoes que serão enviadas no body da requisição

    const createUserService = new CreateUserService() // Atribuindo os métodos para a variavel createUserService

    const user = await createUserService.execute({name, email, admin, password}) // Faz o envio para o service

    return res.json(user) // Devolve com uma reposta em JSON
  }
}

export { CreateUserController } // Exportando a classe