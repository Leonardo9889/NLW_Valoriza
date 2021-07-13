import { EntityRepository, Repository } from "typeorm"
import { User } from "../entities/User"

@EntityRepository(User) //  Repositório da minha entidade User
class UsersRepositories extends Repository<User>{

}

export { UsersRepositories }