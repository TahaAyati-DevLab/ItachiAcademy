const express = require("express")
const commentRouter = express.Router()
const commentController = require("./../../controllers/v1/commentController.js")
const authMiddleware = require("./../../middlewares/auth.js")
const isAdmin = require("./../../middlewares/isAdmin.js")

commentRouter.post("/", authMiddleware, commentController.create)
commentRouter.delete("/remove/:id", authMiddleware, isAdmin, commentController.remove)

module.exports = commentRouter