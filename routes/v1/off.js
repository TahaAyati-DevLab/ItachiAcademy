const express = require("express")
const offRouter = express.Router()
const notificationController = require("./../../controllers/v1/offController.js")
const authMiddleware = require("./../../middlewares/auth.js")
const isAdmin = require("./../../middlewares/isAdmin.js")

offRouter.route("/").get(authMiddleware,isAdmin,offController.getAll).post(authMiddleware,isAdmin,offController.create)
offRouter.route("/all").post(authMiddleware,isAdmin,offController.setOneAll)
offRouter.route("/:code").post(authMiddleware,offController.getOne)
offRouter.route("/:id").delete(authMiddleware,isAdmin,offController.remove)

module.exports = offRouter