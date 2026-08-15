const userModel = require("./../../models/users.js")
const registerValidator = require("../../validators/auth/register.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.register = async (req, res) => {

    const validatorResult = registerValidator(req.body)
    if (validatorResult != true) {
        return res.status(422).json(validatorResult)
    }

    const { name, username, email, phone, password } = req.body

    const isUserExist = await userModel.findOne({ $or: [{ phone }, { email }, { username }] })
    if (isUserExist) {
        return res.status(409).json({ message: "The phone number, email, or username is already in use !!!" })
    }

    const userCount = await userModel.countDocuments()
    const passwordHash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        name,
        username,
        phone,
        email,
        password: passwordHash,
        role: userCount > 0 ? "USER" : "ADMIN"
    })


    const acceptToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30 day" })

    const userObject = user.toObject()

    Reflect.deleteProperty(userObject, "password")

    return res.status(201).json({ User: userObject, acceptToken })
}

exports.login = async (req, res) => { }