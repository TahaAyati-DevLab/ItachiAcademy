const express = require("express")
const courseRouter = express.Router()
const courseController = require("./../../controllers/v1/courseController.js")
const uploader = require("./../../utils/uploader.js")
const authMiddleware = require("./../../middlewares/auth.js")
const isAdmin = require("./../../middlewares/isAdmin.js")
const multer = require("multer")

courseRouter.route("/create").post(multer({storage:uploader,limits:{fieldNameSize:100000000}}).single("cover"),authMiddleware,isAdmin,courseController.createCourse)
courseRouter.route("/:href/:sessionID").get(courseController.getSessionInfo)

module.exports = courseRouter