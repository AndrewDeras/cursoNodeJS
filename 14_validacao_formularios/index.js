const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("express-flash");
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser("blablabla"));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.use(flash());

app.get("/", (req, res) => {

  let emailError = req.flash("emailError");
  let nameError = req.flash("nameError");
  let pointsError = req.flash("pointsError");

  let email = req.flash("email");
  let name = req.flash("name");
  let points = req.flash("points");

  emailError = (emailError === undefined || emailError.length === 0) ? undefined : emailError;
  nameError = (nameError === undefined || nameError.length === 0) ? undefined : nameError;
  pointsError = (pointsError === undefined || pointsError.length === 0) ? undefined : pointsError;

  email = (email === undefined || email.length === 0) ? "" : email;
  name = (name === undefined || name.length === 0) ? "" : name;
  points = (points === undefined || points.length === 0) ? 0 : points;

  res.render("index", { emailError, nameError, pointsError, email, name, points });
});

app.post("/form", (req, res) => {
  const { email, name, points } = req.body;

  let emailError;
  let nameError;
  let pointsError;

  if (email === undefined || email === "") {
    emailError = "Campo de email vazio ou inválido.";
  };

  if (name === undefined || name === "") {
    nameError = "Campo de nome não pode ser vazio.";
  };

  if (name.length < 4) {
    nameError = "O nome é muito pequeno.";
  };

  if (points === undefined || points < 20) {
    pointsError = "Não pode ser menor que 20 ou vazio";
  };

  if (emailError != undefined || nameError != undefined || pointsError != undefined) {
    req.flash("emailError", emailError);
    req.flash("nameError", nameError);
    req.flash("pointsError", pointsError);

    req.flash("email", email);
    req.flash("name", name);
    req.flash("points", points);

    res.redirect("/");

  } else {
    res.send("Tudo certo!");
  };

});


app.listen(9393, () => {
  console.log("Servidor rodando em http://localhost:9393");
});