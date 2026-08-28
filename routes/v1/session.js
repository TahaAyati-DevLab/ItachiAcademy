const express = require("express")
const sessionRouter = express.Router()
const sessionController = require("./../../controllers/v1/sessionController.js")
const authMiddleware = require("./../../middlewares/auth.js")
const isAdmin = require("./../../middlewares/isAdmin.js")

sessionRouter.get("/", authMiddleware, isAdmin, sessionController.all)
sessionRouter.post("/:id/create", authMiddleware, isAdmin, sessionController.create)
sessionRouter.delete("/remove/:id", authMiddleware, isAdmin, sessionController.remove)

module.exports = sessionRouter