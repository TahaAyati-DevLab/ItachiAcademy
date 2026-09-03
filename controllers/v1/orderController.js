const courseUserModel = require("./../../models/course-user.js")

exports.getAll = async (req, res) => {
    const orders = await courseUserModel.find({ user: req.user._id }).populate("course", "title href")
    return res.status(200).json(orders)
}

exports.getOne = async (req, res) => {
    const order = await courseUserModel.findOne({ _id: req.params.id }).populate("course", "title href")
    return res.status(200).json(order)
}
