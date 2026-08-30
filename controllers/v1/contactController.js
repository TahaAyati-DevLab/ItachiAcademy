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

exports.remove = async (req, res) => {
    const contact = await contactModel.findByIdAndDelete({_id:req.params.id})
      if (!contact) {
        return res.status(404).json({
            message: "contact not found..."
        });
    }
    return res.status(201).json({message:"Contact delete successfully..."})
 }

exports.answer = async (req, res) => { }