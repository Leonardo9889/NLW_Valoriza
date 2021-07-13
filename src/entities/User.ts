import { Exclude } from "class-transformer";
import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("users") // Informa a qual tabela esta se referenciando
class User {
  @PrimaryColumn() // Define o tipo da coluna
  readonly id: string
  @Column() // Define o tipo da coluna
  name:string
  @Column() // Define o tipo da coluna
  email: string
  @Column() // Define o tipo da coluna
  admin: boolean

  @Exclude() // Impede que o campo seja enviado no momento da requsiiscao para as consultas
  @Column()
  password: string
  @CreateDateColumn() // Define o tipo da coluna
  created_at: Date
  @UpdateDateColumn() // Define o tipo da coluna
  updated_at: Date

  constructor(){   // é a mesma idéia de criar um "new User()"
    if(!this.id) {
      this.id = uuid()
    }
  }
}

export { User }