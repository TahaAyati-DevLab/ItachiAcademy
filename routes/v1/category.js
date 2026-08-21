const express = require("express")
const categoryRouter = express.Router()
const categoryController = require("./../../controllers/v1/categoryController.js")
const authMiddleware = require("./../../middlewares/auth.js")
const isAdmin = require("./../../middlewares/isAdmin.js")

categoryRouter.post("/create",authMiddleware,isAdmin,categoryController.create)

module.exports = categoryRouter