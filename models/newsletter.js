const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    }
},{timestamps:true})

const newsLetterModel = mongoose.model("newsletter",schema)

module.exports = newsLetterModel