const express = require("express")
const departmenRouter = express.Router()
const departmenController = require("./../../controllers/v1/departmenController.js")
const authMiddleware = require("../../middlewares/auth.js")
const isAdmin = require("../../middlewares/isAdmin.js")

departmenRouter.route("/").post(authMiddleware,isAdmin,departmenController.create).get(authMiddleware,isAdmin,departmenController.getAll)
departmenRouter.route("/remove/:id").delete(authMiddleware,isAdmin,departmenController.remove)

module.exports = departmenRouter