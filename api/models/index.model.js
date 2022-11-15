const db = require("../db/index.db");

// IMPORT MODELS
const User = require("./User");
const Favorite = require("./Favorite");

// RELATION BETWEEN MODELS
Favorite.belongsTo(User, {as: "user"})

module.exports = { User, Favorite };
