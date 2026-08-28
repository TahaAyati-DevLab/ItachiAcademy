const commentModel = require("./../../models/comments")


exports.create = async(req,res)=>{
    const {body, creator,courseHref,score} = req.body

    const comment = await commentModel.create({
        body,
        user : req.user._id,
        course : courseHref,
        score,
        mainCommentID : 0,
        isAccept : 0,
        isAnswer:0
    })

    return res.status(201).json({message:"Create Comment Successfully..."})
}