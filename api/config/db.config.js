const { config } = require("dotenv");
config();

module.exports= {
    database: process.env.DB_DATABASE,
    username:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    dialect:process.env.DB_DIALECT,
}