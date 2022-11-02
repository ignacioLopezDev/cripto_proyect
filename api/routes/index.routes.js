const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const { welcome } = require("../controllers/welcome");

// AUTH ROUTES
router.use("/", authRoutes);

router.get("/", welcome);

module.exports = router;
