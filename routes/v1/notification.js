const express = require("express")
const notificationRouter = express.Router()
const notificationController = require("./../../controllers/v1/notificationController.js")
const authMiddleware = require("./../../middlewares/auth.js")
const isAdmin = require("./../../middlewares/isAdmin.js")

notificationRouter.route("/").post(authMiddleware,isAdmin,notificationController.create).get(authMiddleware,isAdmin,notificationController.getAll)
notificationRouter.route("/admin").get(authMiddleware,isAdmin,notificationController.get)
notificationRouter.route("/:id/see").put(authMiddleware,isAdmin,notificationController.seen)



module.exports = notificationRouter