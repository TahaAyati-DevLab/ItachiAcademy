const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    free: {
        type: Number,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    course: {
        type: mongoose.Types.ObjectId,
        ref: "courses",
        required: true
    }
}, { timeseries: true })

const sessionModel = mongoose.model("sesstions",schema)

module.exports = sessionModel