const express = require('express'); //importando o expresse
const app = express(); //iniciando express

app.get('/', (req, res) => {
  res.send('Bem vindo ao guia do programador');
});

app.get('/blog/:artigo?', (req, res) => {
  let artigo = req.params.artigo;
  if (artigo) {
    res.send(`<h2>Artigo: ${artigo}</h2>`);
  } else {
    res.send('Bem vindo ao meu blog');
  }

});

app.get('/canal/youtube', (req, res) => {
  let canal = req.query['canal'];
  if (canal) {
    res.send(canal);
  } else {
    res.send('Nenhum canal fornecido');
  }
});

app.get('/ola/:nome/:empresa', (req, res) => {
  // req => são os dados enviados pelo usuário
  // res => resposta que vai ser enviada para o usuário
  let nome = req.params.nome;
  let empressa = req.params.empresa;
  res.send(`Oi ${nome} seja bem vindo na ${empressa}`);
});

app.listen(4000, (erro) => {
  if (erro) {
    console.log('um erro aconteceu');
  } else {
    console.log('Servidor rodando em http://localhost:4000');
  }
})