const notificationModel = require('./../../models/notification.js')

exports.create = async(req,res)=>{

    const {message,admin} = req.body

    const notification = await notificationModel.create({
        message,
        admin
    })

    return res.status(201).json(notification)
}

exports.get = async(req,res)=>{
    const {_id} = req.user

    const notification = await notificationModel.find({admin:_id})
    return res.status(200).json(notification)
}


exports.getAll = async(req,res)=>{
    const notifications = await notificationModel.find({}).lean().populate("admin","-password")
    return res.status(200).json(notifications)
}

exports.seen = async(req,res)=>{
    const {id} = req.params
    const notification = await notificationModel.findByIdAndUpdate({_id:id},{
        seen:1
    })
    return res.status(200).json({message:"Notification seen..."})
}