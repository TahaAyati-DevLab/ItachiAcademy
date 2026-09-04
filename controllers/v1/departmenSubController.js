const departmenSubModel = require("../../models/departmen-sub.js")

exports.create = async(req,res)=>{
    const {title,parent} = req.body
    const departmen = await departmenSubModel.create({
        title,
        parent
    })
    return res.status(201).json(departmen)
}

exports.getAll = async (req, res) => {
    const departmenSubs = await departmenSubModel
        .find()
        .populate("parent","title")

    return res.status(200).json(departmenSubs)
}
exports.remove = async(req,res)=>{
    const {id} = req.params
    const departmenSub = await departmenSubModel.findByIdAndDelete({_id:id})
    return res.status(200).json({message:"DepartmenSub remove successfully..."})
}