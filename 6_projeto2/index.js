const express = require("express");
const app = express();
const connection = require("./database/database");



//view engine
app.set('view engine', 'ejs');

// static
app.use(express.static('public'));

//body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//database

connection
  .authenticate()
  .then(() => {
    console.log('Conexão feita com o banco guiapress');
  }).catch((error) => {
    console.log('error na conexão com o banco ');
  });

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(8080, () => {
  console.log('Servidor rodando em http://localhost:8080');
});