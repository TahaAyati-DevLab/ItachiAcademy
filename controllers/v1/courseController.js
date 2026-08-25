const courseModel = require("./../../models/courses.js")
const courseValidator = require("./../../validators/course/course.js")

exports.createCourse = async (req, res) => {
    const validationResult = courseValidator(req.body)
    if (validationResult != true) {
        return res.status(422).json(validationResult)
    }

    const { title, discription, support, href, price, status, discount, categoryID } = req.body

    const course = await courseModel.create({
        title,
        discription,
        support,
        href,
        price,
        status,
        discount,
        categoryID,
        cover: req.file.filename,
        teacher: req.user._id
    })

    const mainCourse = await courseModel.findById({_id:course.id})
    return res.status(201).json(mainCourse)

}