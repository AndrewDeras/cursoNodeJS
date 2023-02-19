const express = require("express");
const app = express();
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");

//Database
connection
  .authenticate()
  .then(() => {
    console.log('Conexão feita com o banco de dados guiaperguntas');
  })
  .catch((msgErro) => {
    console.log(msgErro);
  })

// fazendo o express usar o ejs como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//rotas
app.get('/', (req, res) => {
  //SELECT * FROM perguntas;
  Pergunta.findAll({
    raw: true, order: [
      ['id', 'DESC']//ascendente = ASC || decrescente = DESC
    ]
  }).then((perguntas) => {
    res.render('index',
      {
        perguntas: perguntas
      });
  });
});

app.get('/perguntar', (req, res) => {
  res.render('perguntar');
});

app.post('/salvarpergunta', (req, res) => {
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;
  Pergunta.create({
    titulo: titulo,
    descricao: descricao
  }).then(() => {
    res.redirect('/');
  });
});

app.get('/pergunta/:id', (req, res) => {
  let id = req.params.id;

  Pergunta.findOne({
    where: { id: id }
  }).then((pergunta) => {
    if (pergunta != undefined) { //pergunta encontrada
      res.render('pergunta', {
        pergunta: pergunta
      });
    } else { // pergunta não encontrada
      res.redirect('/');
    }
  })
});

app.listen(3939, () => console.log('server rodando em http://localhost:3939'));