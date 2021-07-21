<h1 align="center">Serverless API</h1>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Serverless](https://www.serverless.com/)

## 💻 Projeto

Aplicação para fazer upload de uma função lambda na [AWS](https://aws.amazon.com/)

## 🚀 Como executar

- Clone o repositório
- Execute `yarn` para baixar as dependências
- Execute `serverless deploy -v` para fazer o deploy na [AWS](https://aws.amazon.com/)

## 🚀 Como consumir a API em produção

Utilize alguma aplicação para fazer requisições `HTTP` como [Postman](https://www.postman.com/)

POST `https://uynvoaxh31.execute-api.sa-east-1.amazonaws.com/dev/employees`

Body request:
```json
{
    "employeeId": "1",
    "name": "new user",
    "age": 30,
    "role": "software developer"
}
```

GET `https://uynvoaxh31.execute-api.sa-east-1.amazonaws.com/dev/employees/1`

PUT `https://uynvoaxh31.execute-api.sa-east-1.amazonaws.com/dev/employees/1`

Body request
```json
{
    "name": "updated user",
    "age": 20,
    "role": "software engineer"
}
```

DELETE `https://uynvoaxh31.execute-api.sa-east-1.amazonaws.com/dev/employees/1`

## 📄 Licença
