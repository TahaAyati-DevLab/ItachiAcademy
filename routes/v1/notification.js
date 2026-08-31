const express = require("express")
const notificationRouter = express.Router()
const notificationController = require("./../../controllers/v1/notificationController.js")
const authMiddleware = require("./../../middlewares/auth.js")
const isAdmin = require("./../../middlewares/isAdmin.js")

notificationRouter.route("/").post(authMiddleware,isAdmin,notificationController.create)
notificationRouter.route("/:adminID").post(authMiddleware,isAdmin,notificationController.get)
notificationRouter.route("/:id/see").post(authMiddleware,isAdmin,notificationController.seen)



module.exports = notificationRouter