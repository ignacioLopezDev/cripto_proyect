const express = require("express");
const authRoutes = express.Router();

const { signIn, signUp } = require("../controllers/authController");

authRoutes.post("/signup", signUp);
authRoutes.post("/signin", signIn);
// authRoutes.use("/signout");

module.exports = authRoutes;

// https://auth0.com/blog/complete-guide-to-react-user-authentication/