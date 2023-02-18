const express = require("express");
const app = express();
const connection = require("./database/database");
//Database
connection
  .authenticate()
  .then(() => {
    console.log('Conexão feita com o banco de dados');
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
  res.render('index');
});

app.get('/perguntar', (req, res) => {
  res.render('perguntar');
});

app.post('/salvarpergunta', (req, res) => {
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;
  res.send(`Formulário recebido, titulo: ${titulo}, descrição: ${descricao}`);
});
app.listen(3939, () => console.log('server rodando em http://localhost:3939'));