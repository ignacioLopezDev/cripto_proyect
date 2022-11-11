const express = require("express");
const authRoutes = express.Router();

const { signUp } = require("../controllers/authController_bk");

authRoutes.post("/signUp", signUp);
// authRoutes.use("/signout");

module.exports = authRoutes;

// https://auth0.com/blog/complete-guide-to-react-user-authentication/