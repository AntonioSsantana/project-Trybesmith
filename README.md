# Projeto Medieval Store API

A Medieval Store API é um projeto desenvolvido em TypeScript que tem como objetivo criar uma loja de itens medievais no formato de uma API. A aplicação utiliza o banco de dados MySQL e implementa as operações básicas de um banco de dados (CRUD - Create, Read, Update e Delete).

## Funcionalidades

O projeto possui as seguintes funcionalidades:

- Camadas da aplicação: Foram desenvolvidas as camadas Models, Service e Controllers para organizar e separar as responsabilidades da aplicação.
- Endpoints: Foram criados vários endpoints que permitem a leitura e escrita de dados no banco de dados, seguindo as operações CRUD.
- Banco de dados MySQL: A aplicação utiliza o MySQL para armazenar os dados dos itens medievais.

## Dependências

O projeto possui as seguintes dependências:

```json
"dependencies": {
    "dotenv": "10.0.0",
    "express": "4.17.1",
    "express-async-errors": "3.1.1",
    "joi": "17.6.0",
    "jsonwebtoken": "8.5.1",
    "mysql2": "2.3.0"
  }
```

## DevDependencies

O projeto possui as seguintes dependências de desenvolvimento:

```json
"devDependencies": {
    "@types/express": "4.17.13",
    "@types/jest": "27.0.2",
    "@types/jsonwebtoken": "8.5.8",
    "@types/node": "16.11.31",
    "@types/supertest": "2.0.11",
    "@typescript-eslint/eslint-plugin": "5.3.1",
    "@typescript-eslint/parser": "5.3.1",
    "eslint": "7.32.0",
    "eslint-config-airbnb-base": "15.0.0",
    "eslint-config-airbnb-typescript": "15.0.0",
    "eslint-plugin-editorconfig": "3.2.0",
    "eslint-plugin-import": "2.25.3",
    "eslint-plugin-mocha": "9.0.0",
    "eslint-plugin-sonarjs": "0.10.0",
    "jest": "27.3.1",
    "nodemon": "2.0.14",
    "supertest": "6.1.6",
    "ts-jest": "27.0.7",
    "ts-node-dev": "1.1.8",
    "typescript": "4.4.3"
  }
```

## Scripts

O projeto possui os seguintes scripts:

- `start`: Inicia a aplicação.
- `dev`: Inicia a aplicação em modo de desenvolvimento com o Nodemon.
- `test`: Executa os testes utilizando o Jest.
- `posttest`: Executa um script para recriar o banco de dados após os testes.
- `restore`: Executa um script para recriar o banco de dados.

```json
 "scripts": {
    "start": "ts-node src/index.ts",
    "dev": "nodemon --watch \"./src/**\" --ext \"ts,js\" --ignore \"src/**/*.spec.ts,src/**/*.json\" --exec \"ts-node src/index.ts\"",
    "test": "jest",
    "posttest": "ts-node tests/recreateDatabase.ts",
    "restore": "ts-node tests/recreateDatabase.ts",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx"
  }
```