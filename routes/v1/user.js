const express = require("express")
const userRouter = express.Router()
const userController = require("./../../controllers/v1/userController.js")
const authMiddleware = require("./../../middlewares/auth.js")
const isAdmin = require("./../../middlewares/isAdmin.js")

userRouter.post("/ban/:id",authMiddleware,isAdmin,userController.ban)
userRouter.get("/",userController.getAll)

module.exports = userRouter