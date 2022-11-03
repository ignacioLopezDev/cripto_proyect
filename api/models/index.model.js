const db = require("../db/index.db");

const User = require("./User");
const Favorite = require("./Favorite");

const UserFavorites = db.define("UserFavorite", {}, { timestamps: false });
User.belongsToMany(Favorite, { through: UserFavorites });
Favorite.belongsToMany(User, { through: UserFavorites });

module.exports = { User, Favorite };
