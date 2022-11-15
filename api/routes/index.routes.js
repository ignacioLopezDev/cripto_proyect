const express = require("express");
const router = express.Router();

// IMPORT ROUTES
const authRoutes = require("./authRoutes");
const favoritesRoutes = require("./favoritesRoutes");

// AUTH ROUTES
router.use("/", authRoutes);

// FAVORITES ROUTES
router.use("/favorites", favoritesRoutes);

module.exports = router;
