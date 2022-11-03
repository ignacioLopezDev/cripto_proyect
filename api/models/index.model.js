const db = require("../db/index.db");

const User = require("./User");
const Favorite = require("./Favorite");

Favorite.belongsTo(User, {as: "user"})


module.exports = { User, Favorite };
