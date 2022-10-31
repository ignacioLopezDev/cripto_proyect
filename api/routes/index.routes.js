const express = require ("express")
const router = express.Router()

const { welcome } = require("../controllers/welcome")


router.use("/",welcome)

module.exports = router