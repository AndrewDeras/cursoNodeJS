const Sequelize = require("sequelize");

const connection = new Sequelize(
  'guiapress',
  'root',
  'Aa12345678@',
  {
    host: 'localhost',
    dialect: 'mysql'
  });

  module.exports = connection;