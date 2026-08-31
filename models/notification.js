const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    message:{
        type:String,
        required:true
    },
    admin:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    seen:{
        type:Number,
        required:true
    }
},{timestamps:true})

const notificationModel = mongoose.model("notification",schema)

module.exports = notificationModel