const express = require("express");
const favoritesRoutes = express.Router();

const { prueba } = require("../controllers/favoritesControllers");

favoritesRoutes.get("/", prueba);

module.exports = favoritesRoutes;
