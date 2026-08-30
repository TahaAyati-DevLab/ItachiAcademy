const commentModel = require("./../../models/comments")
const { isValidObjectId } = require("mongoose")

exports.create = async (req, res) => {
    const { body, creator, courseHref, score } = req.body

    const comment = await commentModel.create({
        body,
        user: req.user._id,
        course: courseHref,
        score,
        mainCommentID: 0,
        isAccept: 0,
        isAnswer: 0
    })

    return res.status(201).json({ message: "Create Comment Successfully..." })
}

exports.remove = async (req, res) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return res.status(422).json({ message: "The entered ID is invalid." })
    }

    const comment = await commentModel.findOneAndDelete({ _id: id })

    if (!comment) {
        return res.status(404).json({ message: "No comment with this ID was found." })
    }

    return res.status(201).json({ message: "Comment successfully deleted." })
}

exports.accept = async (req, res) => {
    const acceptComment = await commentModel.findByIdAndUpdate({ _id: req.params.id }, {
        isAccept: 1
    })
    if (!acceptComment) {
        return res.status(404).json({ message: "No comment with this ID was found." })
    }
    return res.status(201).json({ message: "Comment successfully accept." })

}

exports.reject = async (req, res) => {
    const rejectComment = await commentModel.findByIdAndUpdate({ _id: req.params.id }, {
        isAccept: 0
    })

    if (!rejectComment) {
        return res.status(404).json({ message: "No comment with this ID was found." })
    }
    return res.status(201).json({ message: "Comment successfully reject." })
}

exports.answer = async (req, res) => {
    const { body } = req.body

    const comment = await commentModel.findByIdAndUpdate({ _id: req.params.id }, {
        isAccept: 1
    })

    if (!comment) {
        return res.status(404).json({ message: "Comment not found..." })
    }

    const answerComment = await commentModel.create({
        body,
        course: comment.course,
        user: req.user._id,
        isAccept: 1,
        isAnswer: 1,
        mainCommentID: req.params.id
    })

    return res.status(201).json(answerComment)
}

exports.getAll = async (req, res) => {

    const comments = await commentModel.find({}).populate("course").populate("user", "-password").lean()

    let allComments = []

    comments.forEach((comment) => {
        comments.forEach((answerComment) => {
            if (String(comment._id) === String(answerComment.mainCommentID)) {
                allComments.push({
                    ...comment,
                    answerComment
                })
            }
        })
    })

    return res.status(200).json({ comments: allComments })

}