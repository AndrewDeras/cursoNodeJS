const Sequelize = require("sequelize");

const connection = new Sequelize('guiaperguntas', 'root', 'Aa12345678@', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;