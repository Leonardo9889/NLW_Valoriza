import express, { Request, Response, NextFunction } from "express"; // importando o express 
import "reflect-metadata"; // Permite a utilização dos decorators, são os arrobas que adicionamos nas classes do DB
import "express-async-errors"
import cors from "cors"

import "./database/index.ts" //Realiza a criação do meu banco de dados database.sqlite
import { router } from "./routes"

const app = express(); // Usando o express
const port = 3000; // Porta do servidor

app.use(cors()); // Permite que a APi recebe requisicoes "de fora"

app.use(express.json()) // informando a API que irá trabalhar com JSON

app.use(router) // Utilziando o arquivo de rotas

//middleware para a tratativa de erros
app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
  //Os erros tratados irão ser enviados por aqui
  if(err instanceof Error){
    return res.status(400).json({
      error: err.message
    })
  }

  //Erros não tratados, será retornado como 500
  return res.status(500).json({
    status: "error",
    message: "Internal server error"
  })
})
//Executando o servidor
app.listen(port, () => console.log(`Server is running on port ${port}`))
