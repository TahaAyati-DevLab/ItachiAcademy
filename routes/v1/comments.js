const express = require("express")
const commentRouter = express.Router()
const commentController = require("./../../controllers/v1/commentController.js")
const authMiddleware = require("./../../middlewares/auth.js")
const isAdmin = require("./../../middlewares/isAdmin.js")

commentRouter.post("/", authMiddleware, commentController.create)
commentRouter.delete("/remove/:id", authMiddleware, isAdmin, commentController.remove)
commentRouter.put("/:id/accept",commentController.accept)
commentRouter.put("/:id/reject",commentController.reject)


module.exports = commentRouter