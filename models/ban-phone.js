const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    phone:{
        type:String,
        required:true
    }
},{timestamps:true})

const banPhoneModel = mongoose.model("ban-phone",schema)

module.exports = banPhoneModel