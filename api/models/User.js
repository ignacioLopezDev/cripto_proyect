const S = require("sequelize");
const db = require("../db/index.db");

class User extends S.Model {}

User.init(
  {
    username: {
      type: S.STRING,
    },
    email: {
      type: S.STRING,
    },
    password: {
      type: S.STRING,
    },
  },
  {
    timestamps: false,
    sequelize: db,
    modelName: "User",
  }
);

module.exports = User;
