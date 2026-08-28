const courseModel = require("./../../models/courses.js")
const sessionModel = require("./../../models/session.js")
const courseUser = require("./../../models/course-user.js")
const courseValidator = require("./../../validators/course/course.js")
const categoryModel = require("./../../models/category.js")

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

    return res.json({ session, sessions })
}

exports.register = async (req, res) => {
    const isUserAlerdayRegistered = await courseUser.findOne({ user: req.user._id })
    if (isUserAlerdayRegistered) {
        return res.status(409).json({ message: "You have already registered for the course." })
    }

    const register = await courseUser.create({
        user: req.user._id,
        course: req.params.id,
        price: req.body.price
    })

    return res.status(201).json({ message: "You have successfully registered for the course." })
}

exports.allCourseThisCategory = async (req, res) => {
    const { href } = req.params;

    const category = await categoryModel.findOne({ href });

    if (!category) {
        return res.status(404).json({
            message: "Category not found..."
        });
    }

    const courses = await courseModel.find({
        categoryID: category._id
    });

    return res.status(200).json({
        courses
    });
};