const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    parent: {
        type: mongoose.Types.ObjectId,
        ref: "department",
        required: true
    }
}, { timestamps: true })

const departmenSubModel = mongoose.model("departmenSub", schema)
module.exports = departmenSubModel