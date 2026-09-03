const express = require("express")
const orderRouter = express.Router()
const orderController = require("./../../controllers/v1/orderController.js")
const authMiddleware = require("./../../middlewares/auth.js")
const isAdmin = require("./../../middlewares/isAdmin.js")

orderRouter.route("/").get(authMiddleware,orderController.getAll)
orderRouter.route("/:id").get(authMiddleware,orderController.getOne)


module.exports = orderRouter