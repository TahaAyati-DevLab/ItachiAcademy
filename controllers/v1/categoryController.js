const categoryModel = require("./../../models/category.js")
const categoryValidator = require("./../../validators/course/category.js")
const { isValidObjectId } = require("mongoose")

exports.create = async (req, res) => {
    const validatorResult = categoryValidator(req.body)
    if (validatorResult != true) {
        return res.status(422).json(validatorResult)
    }

    const { title, href } = req.body

    const isCategoryExist = await categoryModel.findOne({ $or: [{ title }, { title }] })
    if (isCategoryExist) {
        return res.status(409).json({ message: "A category with this title or href already exists." })
    }

    const category = await categoryModel.create({
        title,
        href
    })

    return res.status(201).json({ message: "Category successfully created." })
}

exports.getCategory = async (req, res) => {

    const categoryies = await categoryModel.find({}, "-_id -__v")
    return res.status(200).json(categoryies)

}

exports.remove = async (req, res) => {
    const id = req.params.id
    if (!isValidObjectId(id)) {
        return res.status(422).json({ message: "The entered ID is invalid." })
    }

    const category = await categoryModel.findByIdAndDelete({ _id: id })

    if (!category) {
        return res.status(404).json({ message: "Category not found." })
    }
    return res.status(201).json({ message: "Category successfully deleted." })

}

exports.update = async (req, res) => {
    const id = req.params.id
    if (!isValidObjectId(id)) {
        return res.status(422).json({ message: "The entered ID is invalid." })
    }

    const validationResult = categoryValidator(req.body)
    if (validationResult != true) {
        return res.status(422).json(validationResult)
    }

    const { title, href } = req.body

    const category = await categoryModel.findByIdAndUpdate({ _id: id }, {
        title,
        href
    })
    return res.status(201).json({message:"Category updated successfull."})
}