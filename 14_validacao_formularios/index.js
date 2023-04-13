const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("express-flash");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.use(flash());

app.get("/", (req, res) => {
  res.send('Rodando');
});


app.listen(9393, () => {
  console.log("Servidor rodando em http://localhost:9393");
});