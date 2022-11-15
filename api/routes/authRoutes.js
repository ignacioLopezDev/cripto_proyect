const express = require("express");
const authRoutes = express.Router();

// IMPORT CONTROLLER
const { signUp } = require("../controllers/authController");

authRoutes.post("/signUp", signUp);

module.exports = authRoutes;

