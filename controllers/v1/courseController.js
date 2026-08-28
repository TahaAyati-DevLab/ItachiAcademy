const courseModel = require("./../../models/courses.js")
const sessionModel = require("./../../models/session.js")
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

    const mainCourse = await courseModel.findById({ _id: course.id })
    return res.status(201).json(mainCourse)

}

exports.getSessionInfo = async (req, res) => {
    const course = await courseModel.findOne({ href: req.params.href })


    const session = await sessionModel.findOne({ _id: req.params.sessionID })


    const sessions = await sessionModel.find({ course: course.id })

    console.log(sessions)

    return res.json({session,sessions})
}