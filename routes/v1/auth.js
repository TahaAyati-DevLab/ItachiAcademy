const express = require("express")
const authRouter = express.Router()
const authController = require("./../../controllers/v1/authController.js")

authRouter.post("/register",authController.register)

module.exports = authRouter