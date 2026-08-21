const categoryModel = require("./../../models/category.js")
const categoryValidator = require("./../../validators/course/category.js")

exports.create = async (req, res) => {
    const validatorResult = categoryValidator(req.body)
    if (validatorResult != true) {
        return res.status(422).json(validatorResult)
    }

    const {title,href} = req.body

    const isCategoryExist = await categoryModel.findOne({$or:[{title},{title}]})
    if(isCategoryExist){
        return res.status(409).json({message:"A category with this title or href already exists."})
    }

    const category = await categoryModel.create({
        title,
        href
    })

    return res.status(201).json({message:"Category successfully created."})
}
exports.getCategory = async (req, res) => { }
exports.remove = async (req, res) => { }
exports.update = async (req, res) => { }