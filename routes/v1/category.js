const express = require("express")
const categoryRouter = express.Router()
const categoryController = require("./../../controllers/v1/categoryController.js")

categoryRouter.post("/create",categoryController.create)

module.exports = categoryRouter