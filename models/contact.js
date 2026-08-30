const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
      email:{
        type:String,
        required:true
    },
      phone:{
        type:String,
        required:true
    },
      body:{
        type:String,
        required:true
    },
      answer:{
        type:Number,
        required:true
    },
},{timestamps:true})

const contactModel = mongoose.model("contact",schema)
module.exports = contactModel