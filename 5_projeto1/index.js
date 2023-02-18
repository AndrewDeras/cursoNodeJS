const express = require("express");
const app = express();

// fazendo o express usar o ejs como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/:nome/:lang', (req, res) => {
  const nome = req.params.nome;
  const lang = req.params.lang;
  let exibirMsg = false;

  const produtos = [
    { nome: 'PS5', preco: 5000 },
    { nome: 'XBOX ONE', preco: 4000 },
    { nome: 'TV 4K', preco: 3000 }
  ];

  res.render('index', {
    nome,
    lang,
    empressa: 'Guia do programador',
    inscritos: 10000,
    msg: exibirMsg,
    produtos: produtos
  });
});

app.listen(3939, () => console.log('server rodando em http://localhost:3939'));