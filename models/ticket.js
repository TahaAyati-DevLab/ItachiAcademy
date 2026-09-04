const mongoose = require("mongoose")

const schema = new mongoose.Schema({

    departmenID: {
        type: mongoose.Types.ObjectId,
        ref: "departmen",
        required: true
    },
    departmenSubID: {
        type: mongoose.Types.ObjectId,
        ref: "departmenSub",
        required: true
    },
    priority: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    },
    answer: {
        type: Number,
        required: true
    },
    isAnswer:{
        type:Number,
        required:true
    },
    parent:{
        type:mongoose.Types.ObjectId,
        ref:"ticket",
        required:false
    },
    course: {
        type: mongoose.Types.ObjectId,
        ref: "courses",
    }


}, { timestamps: true })

const ticketModel = mongoose.model("ticket", schema)
module.exports = ticketModel