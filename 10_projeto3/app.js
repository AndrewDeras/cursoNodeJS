const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require('./HtmlParser');
const Writer = require("./Writer");
const PDFWriter = require("./PDFWriter");

let leitor = new Reader();
let escritor = new Writer();


const main = async () => {
  let data = await leitor.Read('./users.csv');
  let dadosProcessados = Processor.Process(data);
  let usuarios = new Table(dadosProcessados);

  let html = await HtmlParser.Parse(usuarios);

  escritor.Write("index.html", html);

  PDFWriter.WritePDF("index.pdf", html);

};

main();