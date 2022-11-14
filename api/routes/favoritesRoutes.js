const express = require("express");
const favoritesRoutes = express.Router();

const {
  addFavorite,
  deleteFavorite,
  getFavorites,
} = require("../controllers/favoritesControllers");


// ADD FAVORITE
favoritesRoutes.post("/", addFavorite);

// DELETE FAVORITE
favoritesRoutes.delete("/:user/:criptoId", deleteFavorite);

// GET FAVORITES
favoritesRoutes.get("/:user",getFavorites)

module.exports = favoritesRoutes;
