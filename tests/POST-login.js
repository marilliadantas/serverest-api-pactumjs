const { spec } = require('pactum')

it('Should log in successfully', async () => {

    await spec() 
        .post(`${process.env.BASE_URL}/login`)
        .withHeaders({
            'Content-Type': 'application/json'
        })
        .withBody({
            email: process.env.EMAIL,
            password: process.env.SENHA
        })
        .expectStatus(200)
        .expectJsonLike({
            "message": "Login realizado com sucesso"
        })
})