const S = require("sequelize");
const db = require("../db/index.db");

class User extends S.Model {}

User.init(
  {
    username: {
      type: S.STRING,
      unique: false,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    picture: {
      type: S.STRING,
      unique:false,
    }
  },
  {
    timestamps: false,
    sequelize: db,
    modelName: "User",
  }
);

module.exports = User;
