const contactModel = require("./../../models/contact.js")

exports.getAll = async (req, res) => {
    const contact = await contactModel.find({}).lean()
    return res.status(200).json(contact)
}

exports.create = async (req, res) => {
    const {name,email,phone,body} = req.body

    const contact = await contactModel.create({
        name,
        email,
        phone,
        body,
        answer: 0
    })

    return res.status(201).json(contact)
}
exports.remove = async (req, res) => { }

exports.answer = async (req, res) => { }