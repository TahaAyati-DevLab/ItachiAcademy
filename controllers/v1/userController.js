const userModel = require("./../../models/users.js")
const banPhoneModel = require("./../../models/ban-phone.js")
const { isValidObjectId } = require("mongoose")

exports.ban = async (req, res) => {
    const id = req.params.id

    if (!isValidObjectId(id)) {
        return res.status(422).json({ message: "The entered ID is invalid." })
    }

    const isUserExist = await userModel.findById({ _id: id })
    if (!isUserExist) {
        return res.status(404).json({ message: "No user with this ID was found." })
    }

    const isUserBan = await banPhoneModel.findOne({ phone: isUserExist.phone })
    if (isUserBan) {
        return res.status(200).json({ message: "This user has already been banned." })
    }

    const ban = await banPhoneModel.create({
        phone: isUserExist.phone
    })

    return res.status(201).json({ message: `The user with phone number ${isUserExist.phone} has been successfully banned.` })
}

exports.getAll = async (req, res) => {
    const users = await userModel.find({}, "-password -_id -__v")
    res.status(200).json(users)
}

exports.getBan = async (req, res) => {
    const bans = await banPhoneModel.find({}, "-password -_id -__v")
    res.status(200).json(bans)

}

exports.remove = async (req, res) => {
    const id = req.params.id
    if (!isValidObjectId(id)) {
        return res.status(422).json({ message: "The entered ID is invalid." })
    }

    const user = await userModel.findByIdAndDelete({ _id: id })
    if (!user) {
        return res.status(404).json({ message: "User not found." })
    }

    return res.status(201).json({ message: "User successfully deleted." })
}

exports.role = async (req, res) => {
    const id = req.params.id
    if (!isValidObjectId(id)) {
        return res.status(422).json({ message: "The entered ID is invalid." })
    }

    const user = await userModel.findById({ _id: id })

    if (!user) {
        return res.status(404).json({ message: "User not found." })
    }
    const newRole = user.role === "ADMIN" ? "USER" : "ADMIN"

    const userUpdate = await userModel.updateOne({ _id: id }, {
        role: newRole
    })

    return res.status(201).json({ message: `The user role ${user.username} was successfully changed to ${newRole}` })
}