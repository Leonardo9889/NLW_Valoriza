import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { hash } from "bcryptjs" // Biblioteca para criptografar a senha enviada

interface IUserRequest {
  name: string,
  email:string,
  admin?:boolean,
  password:string
}

class CreateUserService {
  async execute({name, email, admin = false, password} : IUserRequest) { 
    const usersRepository = getCustomRepository(UsersRepositories); // Instanciando a classe UsersRepositories

    if(!email) {
      throw new Error("Email incorrect") // Lança um erro se o e-mail não for informado
    }
     
    // Acessa o banco de dados para localizar a coluna 
    const userAlreadyExists = await usersRepository.findOne({ // Busca apenas um campo ( email )
      email
    })

    if(userAlreadyExists){
      throw new Error("Email already exists") // Se o e-mail existir, lança o erro
    }

    const passwordHash = await hash(password, 8)

    const user = usersRepository.create({ // Se passar por tudo, cria os campos
      name,
      email,
      admin,
      password: passwordHash
    })

    await usersRepository.save(user) // Salva a variavel user com os dados
    return user // retorna os dados salvos

  }
}


export { CreateUserService } // Exporta a class