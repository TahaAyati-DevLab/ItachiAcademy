const express = require("express")
const app = express()
const authRouter = require("./routes/v1/auth.js")
const userRouter = require("./routes/v1/user.js")
const categoryRouter = require("./routes/v1/category.js")
const courseRouter = require("./routes/v1/course.js")
const sessionRouter = require("./routes/v1/session.js")
const commentrouter = require("./routes/v1/comments.js")
const contactRouter = require("./routes/v1/contact.js")


const path = require("path")
const multer = require("multer")

app.use(express.json())
app.use(express.static(path.join(__dirname,"public","course","cover")))
app.use("/v1/auth",authRouter)
app.use("/v1/user",userRouter)
app.use("/v1/category",categoryRouter)
app.use("/v1/courses",courseRouter)
app.use("/v1/session",sessionRouter)
app.use("/v1/contact",contactRouter)


module.exports = app