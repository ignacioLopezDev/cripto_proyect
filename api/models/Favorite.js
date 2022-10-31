const S = require("sequelize");
const db = require("../db/index.db");

class Favorite extends S.Model {}

Favorite.init(
  {
    criptoId: {
      type: S.STRING,
    },
    criptoName: {
      type: S.STRING,
    },
  },
  {
    timestamps: false,
    sequelize: db,
    modelName: "Favorites",
  }
);

module.exports = Favorite