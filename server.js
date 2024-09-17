import express from 'express'

const app = express()

const users = []

app.post('/users', (request, response) => {
 console.log(request)

 response.send('Ok aqui deu certo')

})

app.get('/users', (request, response) =>  {
    response.send('Ok, deu bom')
})

app.listen(3000)
/*
    1) tipo de rota / metodo http
    2) endereço
*/  