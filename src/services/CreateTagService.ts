import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"

interface  ITagRequest{
  name: string
}

class CreateTagService {
  async execute({name} : ITagRequest) {
    const tagsRepositories = getCustomRepository(TagsRepositories)

    // Verifica se o campo esta preenchido
    if(!name) {
      throw new Error("Incorrect name!")
    }

    // Se estiver preenchido, ele busca no banco o campo
    const tagAlreadyExists = await tagsRepositories.findOne({
      name
    })

    // Se existir a tag com o mesmo nome, lança o erro
    if(tagAlreadyExists) {
      throw new Error("Tag name already exists!")
    }

    // Se estiver tudo certo, cria a tag
    const tag = tagsRepositories.create({
      name
    })

    // Salva a tag
    await tagsRepositories.save(tag)

    // Retorna os dados
    return tag

  }
}

export { CreateTagService }