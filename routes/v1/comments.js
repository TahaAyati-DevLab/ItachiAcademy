const express = require("express")
const commentRouter = express.Router()
const commentController = require("./../../controllers/v1/commentController.js")
const authMiddleware = require("./../../middlewares/auth.js")
const isAdmin = require("./../../middlewares/isAdmin.js")

commentRouter.post("/", authMiddleware, commentController.create)
commentRouter.get("/",authMiddleware,isAdmin,commentController.getAll)
commentRouter.delete("/remove/:id", authMiddleware, isAdmin, commentController.remove)
commentRouter.put("/:id/accept",authMiddleware,isAdmin,commentController.accept)
commentRouter.put("/:id/reject",authMiddleware,isAdmin,commentController.reject)
commentRouter.post("/:id/answer",authMiddleware,commentController.answer)

module.exports = commentRouter