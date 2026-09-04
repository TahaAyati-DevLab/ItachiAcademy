const departmenModel = require("./../../models/departmen.js")
const departmenSubModel = require("./../../models/departmen-sub.js")

exports.create = async (req, res) => { }

exports.getAll = async (req, res) => { }

exports.userTickets = async (req, res) => { }

exports.departments = async (req, res) => {
    const departmen = await departmenModel.find({}).lean()
    return res.status(200).json(departmen)
}

exports.departmentsSubs = async (req, res) => {
    const { id } = req.params
    const departmen = await departmenModel.findById({ _id: id })
    const departmenSub = await departmenSubModel.find({ parent: departmen._id }).populate("parent", "title")

    return res.status(200).json(departmenSub)


}

exports.setAnswer = async (req, res) => { }

exports.getAnswer = async (req, res) => { }