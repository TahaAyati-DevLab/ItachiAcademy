const sessionModel = require("./../../models/session.js")
const courseModel = require("./../../models/courses.js")

exports.create = async(req,res)=>{
    const {title,time,free,course} = req.body

    const session = await sessionModel.create({
        title,
        time,
        free,
        video:"Test.MP4",
        course
    })

    return res.status(201).json({message:"The course was successfully created."})
}