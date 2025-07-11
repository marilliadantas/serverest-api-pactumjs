require('dotenv').config();
const { spec } = require('pactum')

it('Should get random users', async () => {
  await spec()
    .get(`${process.env.BASE_URL}/usuarios`)
    .expectStatus(200)
})