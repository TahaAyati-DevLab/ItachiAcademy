const contactModel = require("./../../models/contact.js")
const nodemailer = require("nodemailer")
require("dotenv").config()


exports.getAll = async (req, res) => {
    const contact = await contactModel.find({}).lean()
    return res.status(200).json(contact)
}

exports.create = async (req, res) => {
    const {name,email,phone,body} = req.body

    const contact = await contactModel.create({
        name,
        email,
        phone,
        body,
        answer: 0
    })

    return res.status(201).json(contact)
}

exports.remove = async (req, res) => {
    const contact = await contactModel.findByIdAndDelete({_id:req.params.id})
      if (!contact) {
        return res.status(404).json({
            message: "contact not found..."
        });
    }
    return res.status(201).json({message:"Contact delete successfully..."})
 }

exports.answer = async (req, res) => {
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from:"ai.develop.2000@gmail.com",
        to:req.body.email,
        subject:"پاسخ",
        text:req.body.answer
    }
    transporter.sendMail(mailOptions,async(error,info)=>{
        if(error){
            return res.json({message:error})
        }else{
            const contact = await contactModel.findOneAndUpdate({email:req.body.email},{answer:1})
            return res.status(201).json({message:"Email sent successfully :))"})
        }
    })
}