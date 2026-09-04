const departmenModel = require("./../../models/departmen.js")
const departmenSubModel = require("./../../models/departmen-sub.js")
const ticketModel = require("./../../models/ticket.js")

exports.create = async (req, res) => {
    const { departmenID, departmenSubID, priority, title, body, answer, isAnswer, parent, course, } = req.body

    const ticket = await ticketModel.create({
        departmenID,
        departmenSubID,
        user: req.user._id,
        priority,
        title,
        body,
        answer: 0,
        isAnswer: 0,
        course
    })

    const mainTicket = await ticketModel.findOne({_id:ticket._id}).populate("departmenID").populate("departmenSubID")
    return res.status(201).json(mainTicket)
}

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