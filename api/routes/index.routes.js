const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const favoritesRoutes = require("./favoritesRoutes");
const { welcome } = require("../controllers/welcome");


// AUTH ROUTES
router.use("/", authRoutes);

// FAVORITES ROUTES
router.use("/favorites", favoritesRoutes)

router.get("/", welcome);

module.exports = router;
