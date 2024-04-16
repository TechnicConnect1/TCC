const sequelize = require("sequelize");
require('dotenv').config();

const connection = new sequelize(
    "technic_db",
    "root",
    "",
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        password: process.env.DB_PASS,
        dialect: "mysql",
        timezone:"-03:00"
    }
);

module.exports = connection;