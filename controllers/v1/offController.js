const offModel = require("./../../models/off.js")
const courseModel = require("./../../models/courses.js")

exports.getAll = async (req, res) => {
    const offs = await offModel.find({}, "-__v").populate("course", "title href").populate("creator", "username")
    return res.status(200).json(offs)
}

exports.create = async (req, res) => {
    const { code, pertcent, course, max } = req.body

    const newOff = await offModel.create({
        code,
        pertcent,
        course,
        max,
        uses: 0,
        creator: req.user._id
    })

    return res.status(201).json(newOff)
}

exports.setOneAll = async (req, res) => {

    const { discount } = req.body

    const coutsesDiscount = await courseModel.updateMany({}, { discount })

    return res.status(201).json({ message: "Discount set Successfully..." })

}

exports.getOne = async (req, res) => { }

exports.remove = async (req, res) => { }