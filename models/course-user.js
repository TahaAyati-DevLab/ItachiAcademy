const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    course: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
}, { timestamps: true })

const courseUser = mongoose.model("courseUser",schema)

module.exports = courseUser