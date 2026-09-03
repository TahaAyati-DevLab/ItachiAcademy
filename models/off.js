const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    code:{
        type:String,
        required:true
    },
    pertcent:{
        type:Number,
        required:true
    },
    course:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    max:{
        type:Number,
        required:true
    },
    uses:{
        type:Number,
        required:true
    },
    creator:{
        type:mongoose.Types.ObjectId,
        required:true
    }
},{timestamps:true})

const offModel = mongoose.model("off",offModel)
module.exports = offModel