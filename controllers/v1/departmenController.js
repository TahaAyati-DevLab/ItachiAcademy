const departmenModel = require("../../models/departmen.js")

exports.create = async(req,res)=>{
    const {title} = req.body
    const departmen = await departmenModel.create({
        title
    })
    return res.status(201).json(departmen)
}

exports.getAll = async(req,res)=>{
    const departmens = await departmenModel.find({}).lean()
    return res.status(200).json(departmens)
}

exports.remove = async(req,res)=>{
    const {id} = req.params

    const departmen = await departmenModel.findByIdAndDelete({_id:id}).lean()
    if(!departmen){
        return res.status(404).json({message:"Departmen not found..."})
    }
    return res.status(201).json({message:"Departmen remove successfully..."})
}