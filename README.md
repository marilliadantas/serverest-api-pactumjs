<h1 style="text-align: center;">🤖 Automação de Testes de API com PactumJS</h1>

Este projeto utiliza [**PactumJS**](https://pactumjs.github.io/) como framework de automação de testes para APIs REST, escrito em **JavaScript**, com suporte ao **Mocha** como framework de testes e ao **ServeRest** como API simulada.

## 🛠️ Requisitos

- Node.js
- Docker instalado e em execução (Se for rodar localmente)
- Git instalado


## 🟢 Inicialização do Projeto
Inicia um novo projeto Node.js e cria o arquivo package.json, onde ficam as dependências e scripts do projeto

```bash
npm init
```

## 📦 Instalação das Dependências
Instala o PactumJS como uma dependência de desenvolvimento (-D ou --save-dev), usada para testes de APIs REST.

```bash
npm install -D pactum
```

Instala o Mocha, um framework de testes em JavaScript. Ele é usado para rodar os testes escritos com Pactum.

```bash
npm install -D pactum
```

## 🛠️ Inicialização do Pactum
Cria a estrutura base do projeto de testes com Pactum, incluindo a pasta tests e um exemplo de teste.

```bash
npx pactum-init
```

## 🚀 Rodando o projeto localmente
1. Inicializar o repositório Git e adicionar ServeRest

```bash
git init
git submodule add https://github.com/ServeRest/ServeRest
```

2. Subir a API com Docker
```bash
docker run -p 3000:3000 paulogoncalvesbh/serverest:latest
```

## 🧪 Executando os testes

No arquivo `package.json`, adicionamos este script para rodar os testes:

```json
"scripts": {
  "test": "mocha ./tests"
}
```

Agora, para executar os testes, basta abrir o terminal na pasta do projeto e digitar:
```bash
npm run test
```

## 📚 Referências

- 🔗 [Documentação PactumJS](https://pactumjs.github.io/)
- 🐳 [ServeRest no GitHub](https://github.com/ServeRest/ServeRest)
- ☕ [Mocha - Framework de Testes](https://mochajs.org/)

Teste