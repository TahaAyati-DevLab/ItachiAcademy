const app = require("./app.js")
const mongoose = require("mongoose")
require("dotenv").config()

const port = process.env.PORT;

(()=>{
    mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB connect...")
})()

app.listen(port,()=>{
    console.log(`Server Running On Port: ${port}`)
})