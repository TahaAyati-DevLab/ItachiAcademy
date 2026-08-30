const courseModel = require("./../../models/courses.js")
const sessionModel = require("./../../models/session.js")
const courseUser = require("./../../models/course-user.js")
const courseValidator = require("./../../validators/course/course.js")
const categoryModel = require("./../../models/category.js")
const commentModel = require("../../models/comments.js")
const userModel = require("../../models/users.js")
const courseUserModel = require("./../../models/course-user.js")
const { isValidObjectId } = require("mongoose")

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

exports.remove = async (req, res) => {
    const { id } = req.params
    if (!isValidObjectId(id)) {
        return res.status(422).json({ message: "The entered ID is invalid." })
    }

    const course = await courseModel.findOneAndDelete({ _id: id })
    if (!course) {
        return res.status(404).json({ message: "No course with this ID was found." })
    }

    return res.status(201).json({ message: `The course named ${course.title} was successfully deleted.` })
}

exports.getOne = async (req, res) => {
    const course = await courseModel.findOne({ href: req.params.href }).populate("teacher", "-password").populate("categoryID").lean()
    const sessions = await sessionModel.find({ course: course._id }).lean()
    const comments = await commentModel.find({ course: course._id, isAccept: 1 }).populate("user","-password").lean()
    const courseUsersCount = await courseUserModel
        .find({ course: course._id })
        .countDocuments();

    const isUserRegisterToThisCourse = !!(await courseUserModel.find({
        user: req.user._id,
        course: course._id
    }))

    let allComments = []

    comments.forEach((comment)=>{
        comments.forEach((answerComment)=>{
            if(String(comment._id) === String(answerComment.mainCommentID)){
                allComments.push({
                    ...comment,
                    course: comment.course.title,
                    user: comment.user.name,
                    answerComment
                })
            }
        })
    })

    return res.status(200).json({ course, sessions, comments: allComments, courseUsersCount, isUserRegisterToThisCourse })
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

exports.courseRelated = async (req, res) => {
    const { href } = req.params;
    const course = await courseModel.findOne({ href })

    if (!course) {
        return res.status(404).json({
            message: "Course not found..."
        });
    }

    let courseRelated = await courseModel.find({ categoryID: course.categoryID }).populate("categoryID")
    courseRelated = courseRelated.filter((course) => course.href !== href)


    return res.status(200).json({ courseRelated })
}