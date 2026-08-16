const express = require("express")
const userRouter = express.Router()
const userController = require("./../../controllers/v1/userController.js")

userRouter.post("/ban/:id",userController.ban)

module.exports = userRouter