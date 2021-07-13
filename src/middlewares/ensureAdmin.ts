import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

// Função que verifica se o Usuário é  um administrador
export async function ensureAdmin(req: Request, res: Response, next: NextFunction){
  //Utilizando o id do usuário que foi autenticado
  const { user_id } = req
  //Utiliza a minha coluna admin 
  const userRepositories = getCustomRepository(UsersRepositories)

  //Procura apenas um usuário com X ID 
  const { admin } = await userRepositories.findOne(user_id)
  
 // Verifica se o id od usuário é admin 
  if(admin){
    return next()
  }

  return res.status(401).json({ 
    error: "Unauthorized"
  })
}