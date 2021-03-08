const express = require('express')
const app = express()
const port = 3000 // identificador da sua aplicacao

app.get('/', (req, res) => { // instancia uma rota na instancia app;
  res.send('Hello World!') // retorna mensagem ao solicitante (res)
})

app.listen(port, () => { // inicia o servidor
  console.log(`Example app listening at http://localhost:${port}`) // mensagem de sucesso
})