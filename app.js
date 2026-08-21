const express = require("express")
const app = express()
const authRouter = require("./routes/v1/auth.js")
const userRouter = require("./routes/v1/user.js")
const categoryRouter = require("./routes/v1/category.js")
const path = require("path")
const multer = require("multer")

app.use(express.json())
app.use(express.static(path.join(__dirname,"public","course","cover")))
app.use("/v1/auth",authRouter)
app.use("/v1/user",userRouter)
app.use("/v1/category",categoryRouter)

module.exports = app