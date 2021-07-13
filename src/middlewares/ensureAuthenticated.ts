import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken" //função verify sendo importada para verificar se o token é válido

//Forçando o tipo do meu sub quando a verificação do token é realizada
interface IPayload {
  sub: string
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction){
  // Recebendo o token de autorização, vindo da requisição
  const authToken = req.headers.authorization 

  //Validar se o token esta preenchido
  if(!authToken){
    return res.status(401).json({
      status: "error",
      message: "Token missing"
    })
  }
  
  // Separa a minha string, permitindo que somente o token seja capturado
  const [ , token]  = authToken.split(" ")

//Validar se o token é válido
try {
  const { sub } = verify(token, "5bb9556dd7b5579416200bb162e119dd") as IPayload

  // Recuperar as informações do usuário
  req.user_id = sub

  return next()
} catch (error) {
  return res.status(401).json({
    status: "error",
    message:"User not authenticate"
  })
  
}
}