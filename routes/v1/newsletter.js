const express = require("express")
const newsletterRouter = express.Router()
const authMiddleware = require("./../../middlewares/auth.js")
const isAdmin = require("./../../middlewares/isAdmin.js")
const newsletterController = require("./../../controllers/v1/newsletterController.js")

newsletterRouter.get("/",authMiddleware,isAdmin,newsletterController.getAll)
newsletterRouter.post("/create",authMiddleware,newsletterController.create)


module.exports = newsletterRouter