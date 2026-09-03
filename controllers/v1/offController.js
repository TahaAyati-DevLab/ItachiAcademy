const offModel = require("./../../models/off.js")
const courseModel = require("./../../models/courses.js")
const { default: mongoose } = require("mongoose")

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

exports.getOne = async (req, res) => {
    const { code } = req.params;
    const { course } = req.body

    if (!mongoose.Types.ObjectId.isValid(course)) {
        return res.status(422).json({ message: "Course id is not valid..." })
    }

    const off = await offModel.findOne({ code, course })
    if (!off) {
        return res.status(404).json({ message: "Off is not found !!!" })
    } else if (off.max === off.uses) {
        return res.status(409).json({ message: "This code already used..." })
    } else {
        await offModel.findOneAndUpdate({ code, course }, {
            uses: off.uses + 1
        })
        return res.status(200).json(off)
    }

}

exports.remove = async (req, res) => { }