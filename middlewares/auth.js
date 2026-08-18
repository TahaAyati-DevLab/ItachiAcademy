const userModel = require("./../models/users.js")
const jwt = require("jsonwebtoken")

module.exports = async (req, res, next) => {
    const authHeader = req.header("Authorization")?.split(" ")
    if (authHeader?.length !== 2) {
        return res.status(422).json({ message: "his route is protected and you can't have access to it !!!" })
    }

    const token = authHeader[1]

    try {
        const jwtPayload = jwt.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findById(jwtPayload.id)

        const userObject = user.toObject()
        Reflect.deleteProperty(userObject, "password")

        req.user = userObject

        next()
    } catch (error) {
        return res.json(error)
    }
}