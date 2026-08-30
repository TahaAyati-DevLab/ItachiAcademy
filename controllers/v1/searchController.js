const courseModel = require("./../../models/courses.js")

exports.search = async(req,res)=>{
    const {keyword} = req.params

    const courses = await courseModel.find({
        title:{$regex: ".*" + keyword + ".*"}
    })

    return res.status(200).json(courses)
}