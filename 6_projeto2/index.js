const express = require("express");
const app = express();
const connection = require("./database/database");

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");
const usersController = require("./user/UsersController");

const Article = require("./articles/Article");
const Category = require("./categories/Category");
const User = require("./user/User");

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

app.use('/', categoriesController);
app.use('/', articlesController);
app.use('/', usersController);

app.get('/', (req, res) => {
  Article
    .findAll({
      order: [['id', 'DESC']],
      limit: 4
    })
    .then((articles) => {
      Category.findAll()
        .then((categories) => {
          res.render('index', { articles: articles, categories: categories });
        })
    })
});

app.get('/:slug', (req, res) => {
  let slug = req.params.slug;
  Article
    .findOne({
      where: { slug: slug }
    }).then((article) => {
      if (article != undefined) {
        Category.findAll()
          .then((categories) => {
            res.render('article', { article: article, categories: categories });
          })
      } else {
        res.redirect('/');
      }
    }).catch((error) => {
      res.redirect('/');
    })
});

app.get('/category/:slug', (req, res) => {
  let slug = req.params.slug;

  Category.findOne({
    where: { slug: slug },
    include: [{ model: Article }]
  }).then((category) => {
    if (category != undefined) {
      Category.findAll()
        .then((categories) => {
          res.render('index', { articles: category.articles, categories: categories })
        });
    } else {
      res.redirect('/')
    }
  }).catch((error) => {
    res.redirect('/');
  })

});

app.listen(8080, () => {
  console.log('Servidor rodando em http://localhost:8080');
});