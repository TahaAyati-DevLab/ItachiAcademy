const sessionModel = require("./../../models/session.js")
const courseModel = require("./../../models/courses.js")
const { isValidObjectId } = require("mongoose")

exports.create = async (req, res) => {

    const id = req.params.id
    if (!isValidObjectId(id)) {
        return res.status(422).json({ message: "The entered ID is invalid." })
    }


    const { title, time, free, course } = req.body

    const isCourseExist = await courseModel.findById({_id:id})

    if(!isCourseExist){
        return res.status(404).json({message:"The requested course was not found."})
    }

    const session = await sessionModel.create({
        title,
        time,
        free,
        video: "Test.MP4",
        course: id
    })

    return res.status(201).json({ message: "The course was successfully created." })
}