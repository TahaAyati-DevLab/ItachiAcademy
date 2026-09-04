const express = require("express")
const departmenRouter = express.Router()
const departmenSubController = require("./../../controllers/v1/departmenSubController.js")
const authMiddleware = require("../../middlewares/auth.js")
const isAdmin = require("../../middlewares/isAdmin.js")

departmenRouter.route("/").post(authMiddleware,isAdmin,departmenSubController.create).get(authMiddleware,isAdmin,departmenSubController.getAll)
departmenRouter.route("/remove/:id").delete(authMiddleware,isAdmin,departmenSubController.remove)

module.exports = departmenRouter