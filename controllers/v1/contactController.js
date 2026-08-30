const contactModel = require("./../../models/contact.js")

exports.getAll = async (req, res) => { }
exports.create = async (req, res) => {
    const {name,email,phone,body} = req.body

    const concat = await contactModel.create({
        name,
        email,
        phone,
        body,
        answer: 0
    })

    return res.status(201).json(concat)
}
exports.remove = async (req, res) => { }
exports.answer = async (req, res) => { }