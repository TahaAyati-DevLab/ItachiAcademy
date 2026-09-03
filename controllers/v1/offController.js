const offModel = require("./../../models/off.js")
const courseModel = require("./../../models/courses.js")

exports.getAll = async (req, res) => { }

exports.create = async (req, res) => { }

exports.setOneAll = async (req, res) => {

    const { discount } = req.body

    const coutsesDiscount = await courseModel.updateMany({}, { discount })

    return res.status(201).json({ message: "Discount set Successfully..." })

}

exports.getOne = async (req, res) => { }

exports.remove = async (req, res) => { }