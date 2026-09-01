const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    message:{
        type:String,
        required:true
    },
    admin:{
        type:mongoose.Types.ObjectId,
        ref:"users",
        required:true
    },
    seen:{
        type:Number,
        default:0,
        required:true
    }
},{timestamps:true})

const notificationModel = mongoose.model("notification",schema)

module.exports = notificationModel