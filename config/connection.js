const Sequelize = require("sequelize");
require("dotenv").config();

// create connection to our database
// JAWSDB_URL link to Heroku database for when we deploy our app
let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "127.0.0.1",
    dialect: "mysql",

    port: process.env.PORT,
  }
);
// }

module.exports = sequelize;
