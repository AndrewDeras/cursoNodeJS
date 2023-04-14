const database = require("./database");

/*
Insert

const dados = [
  {
    name: "GTA V",
    price: 79.90
  },
  {
    name: "Forza Horizon 5",
    price: 199.90
  },
  {
    name: "Hitman 3",
    price: 99.90
  },
];

database.insert(dados).into("games")
  .then((data) => {
    console.log(data);
  }).catch((error) => {
    console.log(error);
  });
  
*/

/**
 * Select

database.select(["id", "price"]).table("games").then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

query dentro de query

database.insert({ name: "Need for speed", price: 89.75 }).into("games")
.then((data) => {
  database.select().table("games").then((data) => {
    console.log(data);
  }).catch((error) => {
    console.log(error);
  });
}).catch((error) => {
  console.log(error);
});

*/

/**
 * where

database.select()
.whereRaw("name = 'Formula 1 2022' OR price > 100")
.table("games").then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

*/

/**
 * raw

 database.raw("select * from games")
   .then((data) => { console.log(data); })
   .catch((error) => { console.log(error); });
*/


/*
  *Detele
 
  database.where({ id: 4 }).delete().table("games")
    .then((data) => { console.log(data); })
    .catch((error) => { console.log(error); });
*/


/**Update
 
 database.where({ id: 1 }).update({ price: 95.99 }).table("games")
   .then((data) => { console.log(data); })
   .catch((error) => { console.log(error); });

*/

