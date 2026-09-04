const express = require("express")
const departmenRouter = express.Router()
const departmentController = require("./../../controllers/v1/departmentController.js")
const authMiddleware = require("./../../middlewares/auth.js")
const isAdmin = require("./../../middlewares/isAdmin.js")

departmenRouter.route("/").post(authMiddleware,isAdmin,departmentController.create).get(authMiddleware,isAdmin,departmentController.getAll)
departmenRouter.route("/remove/:id").delete(authMiddleware,isAdmin,departmentController.remove)

module.exports = departmenRouter