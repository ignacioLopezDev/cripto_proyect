const S = require("sequelize");
const {
  database,
  username,
  password,
  host,
  port,
  dialect,
} = require("../config/db.config");

const sequelize = new S({
  database,
  username,
  password,
  host,
  port,
  dialect,
  logging: false,
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false, // This line will fix new error
    },
  },
});

module.exports = sequelize;
