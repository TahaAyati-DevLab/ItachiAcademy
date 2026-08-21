const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    href: {
        type: String,
        required: true
    }
}, { timestamps: true })

const categoryModel = mongoose.model("category", schema)
module.exports = categoryModel