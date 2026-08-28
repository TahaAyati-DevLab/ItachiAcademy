const express = require("express")
const commentRouter = express.Router()
const commentController = require("./../../controllers/v1/commentController.js")
const authMiddleware = require("./../../middlewares/auth.js")

commentRouter.post("/",authMiddleware,commentController.create)

module.exports = commentRouter