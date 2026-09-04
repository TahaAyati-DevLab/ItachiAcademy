const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
}, { timestamps: true })

const departmenModel = mongoose.model("departmen", schema)
module.exports = departmenModel