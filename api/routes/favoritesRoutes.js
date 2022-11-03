const express = require("express");
const favoritesRoutes = express.Router();

const {
  addFavorite,
  deleteFavorite,
} = require("../controllers/favoritesControllers");

favoritesRoutes.post("/", addFavorite);
favoritesRoutes.delete("/", deleteFavorite);

module.exports = favoritesRoutes;
