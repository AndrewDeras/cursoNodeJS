const http = require("http");
http.createServer((req, res) => {
  res.end(`
  Bem vindo ao meu site
  Curso de nodejs
  `);
}).listen(8081);