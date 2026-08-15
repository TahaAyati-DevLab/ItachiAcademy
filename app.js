const express = require("express")
const app = express()
const authRouter = require("./routes/v1/auth.js")
const path = require("path")
const multer = require("multer")

app.use(express.json())
app.use(express.static(path.join(__dirname,"public","course","cover")))
app.use("/v1/auth",authRouter)

module.exports = app