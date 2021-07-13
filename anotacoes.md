# Lembretes

## Metodos

    GET    => Utilizado para solicitar uma informacao da aplicacao
    POST   => Utilizado para criar/Inserir uma informacao na aplicacao
    PUT    => Utilizado para alterar uma informacao
    DELETE => Remover um dado
    PATCH  => Alterar uma informacao especifica


 ## Tipo de parâmetros na requisição

    Body params => Utilizado na requisição POST, PUT ou PATCH, onde será enviado um obejto contendo as informações EX:
    { 
        "name":"teclado", 
        "description":"Teclado mecânico"
    }
    query params => Utilizado na grade parte para fazer buscas através de filtros, EX: 
    http://localhost:3000/produtos?name=teclado&description=tecladomecanico ( utilizando o ? para estas buscas seguido do & para mais filtros)

    Routes params => São as rotas utilizadas para acessar uma página, onde são definidos os recursos EX: 
    http://localhost:3000/produtos/78659879 ( o valor numéricos se refere ao identificador do produto )

### Doc de apoio
https://typeorm.io/#/

## Criar uma data base SQLite

Utilizando o ORM typeorm, criamos um arquivo index em uma pasta database importando esta biblioteca e executando a criação
para executar, será necessário a importação do arquivo no servidor para que ele possa ser executado junto;

## Criando uma migration

- para criar uma migration, será necessário utilizar o CLI na configuração do meu ORM ( ormconfig.json ) passando a pasta onde deseja criar estas migrations
- para executar a criação, será necessário adicionar um script no package.json para que ele execute a pasta node_modules/typeorm/cli.js
- Ao executar, será criado o arquivo

## Criando uma tabela na migrations

- com o arquivo criado na etapa anterior, inicia-se a criação das tabelas e colunas
Exemplo de criação 
 await queryRunner.createTable(
            new Table({ conteúdo da tabela })

## Criar uma entidade
* Entidade seria a referencia dos dados da minha tabela
- pode ser criado no arquivo ormconfig.json passando o campo entitiesDir
* Campos da entidade:
    Para definir o tipo do campo criado, será utilizado o @ como tipo da coluna.

## Criar um repositório

#### O que é?
Seria uma ferramenta que irá fazer a comunicação entre a aplicação e o banco de dados

- Para criar, sera necessario a criacao de um arquivo, importando as entidades e repositorios ( detalhes no arquivo UserRepository.ts )

## Servicos
#### O que e?
Os servicos serao utilziados para criar todas as regras, contendo as validacoes necessarias para a aplicação

## Middleware
- Um middleware é utilizado para intermediar entre uma requisição e uma resposta

## Bibliotecas
Todas as bibliotecas estão no arquivo package.json
- UUID 
    * é utilizado para realizar a geração de identificadores únicos para controle no banco de dados

- JWT ( JSON web token ) o que é?
  * é utilizado para a geração de tokens de validação para a API, onde serão armazenados alguns dados desejados para garantir que a permissão é válida;

- bcryptjs
    * utilizado para criptografar as senhas que serão armazenadas no banco de dados



