const commentModel = require("./../../models/comments")
const {isValidObjectId} = require("mongoose")

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

exports.remove = async(req,res)=>{
    const {id} = req.params;

    if(!isValidObjectId(id)){
        return res.status(422).json({message:"The entered ID is invalid."})
    }

    const comment = await commentModel.findOneAndDelete({_id:id})

    if(!comment){
        return res.status(404).json({message:"No comment with this ID was found."})
    }

    return res.status(201).json({message:"Comment successfully deleted."})
}