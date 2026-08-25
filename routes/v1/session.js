const express = require("express")
const sessionRouter = express.Router()
const sessionController = require("./../../controllers/v1/sessionController.js")

sessionRouter.post("/create",sessionController.create)

module.exports = sessionRouter