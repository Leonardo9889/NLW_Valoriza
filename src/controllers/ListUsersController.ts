import { Request, Response } from "express"
import { ListUserService } from "../services/ListUserService"

class ListUsersController{
  async handle(req: Request, res: Response){
    const listUserService = new ListUserService()
    
    const users = await listUserService.execute()
    
    return res.status(201).json({
      status: "Success",
      users
    })
  }
}

export {ListUsersController}