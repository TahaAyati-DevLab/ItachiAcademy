const express = require("express")
const sessionRouter = express.Router()
const sessionController = require("./../../controllers/v1/sessionController.js")

sessionRouter.get("/",sessionController.all)
sessionRouter.post("/:id/create",sessionController.create)

module.exports = sessionRouter