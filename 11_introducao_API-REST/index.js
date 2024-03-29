const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");

const jwtSecret = "asdfasdfasdf";

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

function auth(req, res, next) {
  const authToken = req.headers['authorization'];

  if (authToken != undefined) {
    const token = authToken.split(" ").pop();

    jwt.verify(token, jwtSecret, (error, data) => {
      if (error) {
        res.status(401);
        res.json({ err: "Acesso negado." });
      } else {
        req.token = token;
        req.loggedUser = { id: data.id, email: data.email };
        next();
      };
    });
  } else {
    res.status(401);
    res.json({ err: "Acesso negado" });
  };
};

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
  ],
  users: [
    {
      id: 39,
      name: 'Andrew Barbosa',
      email: 'andrew@email.com',
      password: '12345'
    },
    {
      id: 44,
      name: 'Lewis Hamilton',
      email: 'lewis@email.com',
      password: '44444'
    },
  ]
};

app.get('/games', auth, (req, res) => {

  const HATEOAS = [
    {
      href: "http://localhost:3939/game/0",
      method: "DELETE",
      rel: "delete_game"
    },
    {
      href: "http://localhost:3939/game/0",
      method: "GET",
      rel: "get_game"
    },
    {
      href: "http://localhost:3939/game/0",
      method: "UPDATE",
      rel: "update_game"
    },
    {
      href: "http://localhost:3939/auth",
      method: "POST",
      rel: "login"
    },
  ]

  res.statusCode = 200;
  res.json({ games: dataBase.games, _links: HATEOAS });
});

app.get('/game/:id', (req, res) => {

  if (!isNaN(req.params.id)) {
    let id = parseInt(req.params.id);
    const game = dataBase.games.find(game => game.id === id);
    if (game != undefined) {

      const HATEOAS = [
        {
          href: "http://localhost:3939/game/" + id,
          method: "DELETE",
          rel: "delete_game"
        },
        {
          href: "http://localhost:3939/game/" + id,
          method: "GET",
          rel: "get_game"
        },
        {
          href: "http://localhost:3939/game/" + id,
          method: "UPDATE",
          rel: "update_game"
        }
      ]

      res.statusCode = 200;
      res.json({ game: game, _links: HATEOAS });
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

app.post('/auth', (req, res) => {
  const { email, password } = req.body;

  if (email != undefined) {

    const user = dataBase.users.find((user) => email === user.email);

    if (user != undefined) {

      if (user.password === password) {
        jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: "48h" },
          (err, token) => {
            if (err) {
              res.status(400);
              res.json({ err: "Falha interna." });
            } else {
              res.status(200);
              res.json({ token: token });
            };
          });

      } else {
        res.status(401);
        res.json({ err: "Credenciais inválidas." });
      }
    } else {
      res.status(404);
      res.json({ err: "O email enviado não existe na base de dados." });
    }

  } else {
    res.status(400);
    res.json({ err: "O e-mail enviado é inválido" });
  }

});

app.listen(3939, () => {
  console.log('servidor rodando em http://localhost:3939');
});