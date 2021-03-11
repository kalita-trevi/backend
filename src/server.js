const express = require('express');
const cors = require('cors');
const server = express();
const port = 3000; // identificador da sua aplicacao

// server.get('/:teste', (req, res) => { // instancia uma rota na instancia server;
//   res.send(req.params.teste) // retorna mensagem ao solicitante (res)
// })
// https://expressjs.com/en/resources/middleware/cors.html
// https://imasters.com.br/back-end/desenvolvendo-logica-da-sua-aplicacao-com-controllers-laravel

const frases = [{
    curtidas: 44,
    frase: 'Escolhe um trabalho de que gostes e não terás que trabalhar nem um dia na tua vida.',
    autor: 'confusio'
}, {
    curtidas: 853845,
    frase: 'O homem superior atribui a culpa a si próprio; o homem comum, aos outros.',
    autor: 'confusio'
}, {
    curtidas: 3534566,
    frase: 'Não ser descoberto numa mentira é o mesmo que dizer a verdade.',
    autor: 'Aristoteles Onassis'
}];

server.use(cors());

server.get('/frases', (require, response) => {
    response.json(frases)
});

server.listen(port, () => { // inicia o servidor
    console.log(`Iniciar servidor da Kiu 🥰 em: http://localhost:${port}`); // mensagem de sucesso
});