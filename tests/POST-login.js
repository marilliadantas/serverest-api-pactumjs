const { spec } = require("pactum")

it("Should log in successfully", async () => {
  await spec()
    .post(`${process.env.BASE_URL}/login`)
    .withHeaders({
      "Content-Type": "application/json",
    })
    .withBody({
      email: process.env.EMAIL,
      password: process.env.PASSWORD,
    })
    .expectStatus(200)
    .expectJsonLike({
      message: "Login realizado com sucesso"
    })
})

it("Should show error when email format is invalid", async () => {
  await spec()
    .post(`${process.env.BASE_URL}/login`)
    .withHeaders({
      "Content-Type": "application/json",
    })
    .withBody({
      email: process.env.EMAIL_FORMAT_INVALID,
      password: process.env.PASSWORD,
    })
    .expectStatus(400)
    .expectJsonLike({
      email: "email deve ser um email válido"
    })
})

it("Should show error when email is invalid", async () => {
  await spec()
    .post(`${process.env.BASE_URL}/login`)
    .withHeaders({
      "Content-Type": "application/json",
    })
    .withBody({
      email: process.env.EMAIL,
      password: process.env.PASSWORD_INVALID,
    })
    .expectStatus(401)
    .expectJsonLike({
      message: "Email e/ou senha inválidos"
    })
})

it("Should show error when password is invalid", async () => {
  await spec()
    .post(`${process.env.BASE_URL}/login`)
    .withHeaders({
      "Content-Type": "application/json",
    })
    .withBody({
      email: process.env.EMAIL,
      password: process.env.PASSWORD_INVALID,
    })
    .expectStatus(401)
    .expectJsonLike({
      message: "Email e/ou senha inválidos"
    })
})

it("Should show error when email is empty", async () => {
  await spec()
    .post(`${process.env.BASE_URL}/login`)
    .withHeaders({
      "Content-Type": "application/json",
    })
    .withBody({
      password: process.env.PASSWORD_INVALID,
    })
    .expectStatus(400)
    .expectJsonLike({
      email: "email é obrigatório"
    })
})

it("Should show error when password is empty", async () => {
  await spec()
    .post(`${process.env.BASE_URL}/login`)
    .withHeaders({
      "Content-Type": "application/json",
    })
    .withBody({
      email: process.env.EMAIL
    })
    .expectStatus(400)
    .expectJsonLike({
       password: "password é obrigatório"
    })
})

it("Should show error when email and password is empty", async () => {
  await spec()
    .post(`${process.env.BASE_URL}/login`)
    .withHeaders({
      "Content-Type": "application/json",
    })
    .withBody({
      email: "",
      password: ""
    })
    .expectStatus(400)
    .expectJsonLike({
       email: "email não pode ficar em branco",
       password: "password não pode ficar em branco"
    })
})