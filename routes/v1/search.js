const express = require("express")
const searchRouter = express.Router()
const searchController = require("./../../controllers/v1/searchController.js")

searchRouter.get("/:keyword",searchController.search)

module.exports = searchRouter