const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
    support: {
        type: String,
        required: true
    },
    href: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    categoryID: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    teacher: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    }
}, { timestamps: true })

schema.virtual("sessions", {
    ref: "session",
    localField: "_id",
    foreignField: "course"
})

const courseModel = mongoose.model("courses", schema)

module.exports = courseModel