const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    course: {
        type: mongoose.Types.ObjectId,
        ref: "courses",
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    },
    isAccept: {
        type: Number,
        default: 0
    },
    score: {
        type: Number,
        default: 5
    }, 
    isAnswer: {
        type: Number,
        required: true
    },
    mainCommentID: {
        type: mongoose.Types.ObjectId,
        ref:"comments",
        required: true
    }
}, { timestamps: true })

const commentModel = mongoose.model("comments", schema)

module.exports = commentModel