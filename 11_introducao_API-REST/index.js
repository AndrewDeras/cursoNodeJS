const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let dataBase = {
  games: [
    {
      id: 22,
      title: 'formula 1',
      year: 2022,
      price: 40
    },
    {
      id: 33,
      title: 'Fifa 22',
      year: 2022,
      price: 50
    },
    {
      id: 4,
      title: 'GTA V',
      year: 2013,
      price: 50
    }
  ]
};

app.get('/games', (req, res) => {
  res.statusCode = 200;
  res.json(dataBase.games);
});

app.get('/game/:id', (req, res) => {

  if (!isNaN(req.params.id)) {
    let id = parseInt(req.params.id);
    const game = dataBase.games.find(game => game.id === id);
    if (game != undefined) {
      res.statusCode = 200;
      res.json(game);
    } else {
      res.sendStatus(404);
    }
  } else {
    res.sendStatus(400);
  }
});

app.post('/game', (req, res) => {
  let { title, year, price } = req.body;

  dataBase.games.push({
    id: 391,
    title,
    year,
    price
  })

  res.sendStatus(200);
});

app.delete('/game/:id', (req, res) => {
  if (!isNaN(req.params.id)) {
    let id = parseInt(req.params.id);
    const index = dataBase.games.findIndex(game => game.id === id);

    if (index === -1) {
      res.sendStatus(404);
    } else {
      dataBase.games.splice(index, 1);
      res.sendStatus(200);
    }

  } else {
    res.sendStatus(400);
  }
});


app.put('/game/:id', (req, res) => {
  if (!isNaN(req.params.id)) {
    let id = parseInt(req.params.id);
    let game = dataBase.games.find(game => game.id === id);
    if (game != undefined) {
      let { title, year, price } = req.body;

      if (title != undefined) {
        game.title = title;
      }
      if (year != undefined) {
        game.year = year;
      }
      if (price != undefined) {
        game.price = price;
      }

    } else {
      res.sendStatus(404);
    }
  } else {
    res.sendStatus(400);
  }
});

app.listen(3939, () => {
  console.log('servidor rodando em http://localhost:3939');
});