const express = require("express");
const favoritesRoutes = express.Router();

// CONTROLLERS
const {
  addFavorite,
  deleteFavorite,
  getFavorites,
} = require("../controllers/favoritesControllers");

// ADD FAVORITE
favoritesRoutes.post("/", addFavorite);

// GET FAVORITES
favoritesRoutes.get("/:user", getFavorites);

// DELETE FAVORITE
favoritesRoutes.delete("/:user/:criptoId", deleteFavorite);

module.exports = favoritesRoutes;
