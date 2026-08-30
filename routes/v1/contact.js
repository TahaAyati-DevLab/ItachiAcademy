const express = require("express")
const contactRouter = express.Router()
const contactController = require("./../../controllers/v1/contactController.js")
const authMiddleware = require("./../../middlewares/auth.js")
const isAdmin = require("./../../middlewares/isAdmin.js")

contactRouter.route("/").get(authMiddleware, isAdmin, contactController.getAll).post(authMiddleware, contactController.create)
contactRouter.delete("/:id/remove", authMiddleware, isAdmin, contactController.remove)
contactRouter.post("/answer", authMiddleware, isAdmin, contactController.answer)


module.exports = contactRouter