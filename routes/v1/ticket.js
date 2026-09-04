const express = require("express")
const ticketRouter = express.Router()
const ticketController = require("./../../controllers/v1/ticketController.js")
const authMiddleware = require("./../../middlewares/auth.js")
const isAdmin = require("./../../middlewares/isAdmin.js")

ticketRouter.route("/").post(authMiddleware,ticketController.create).get(authMiddleware,isAdmin,ticketController.getAll )
ticketRouter.route("/user").get(authMiddleware, ticketController.userTickets)
ticketRouter.route("/departmen").get(ticketController.departments)
ticketRouter.route("/departmen/:id/sub").get(ticketController.departmentsSubs)
ticketRouter.route("/answer").post(authMiddleware,isAdmin,ticketController.setAnswer)
ticketRouter.route("/:id/answer").get(authMiddleware,ticketController.getAnswer)




module.exports = ticketRouter