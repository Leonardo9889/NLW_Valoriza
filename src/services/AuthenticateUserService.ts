import { compare } from "bcryptjs"
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { sign } from "jsonwebtoken" 

interface IAuthenticateRequest {
  email: string,
  password: string
}

class AuthenticateUserService { 
  async execute({ email, password } : IAuthenticateRequest){ 
    const usersRepositories = getCustomRepository(UsersRepositories)

    // Verificar se o e-mail existe
    const user = await usersRepositories.findOne({ 
      email
    })

    if(!user){
      throw new Error("Email/password incorrect")
    }

    // verificar se a senha esta correta
    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch){
      throw new Error("Email/password incorrect")
    }

    // Gerar o token de autenticação do cliente
    const token = sign({ 
      email: user.email,
    }, "5bb9556dd7b5579416200bb162e119dd", {
      subject: user.id,
      expiresIn:"1h"
    })

    return token
  }
}

export { AuthenticateUserService }