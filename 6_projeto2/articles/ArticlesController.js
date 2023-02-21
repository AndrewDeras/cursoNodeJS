const express = require("express");
const router = express.Router();

router.get('/articles', (req, res) => {
  res.send('Rota de artigos');
});

router.get('/admin/articles/new', (req, res) => {
  res.send('Rota para um novo aritgo');
});

module.exports = router;