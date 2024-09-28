const userModel = require('../model/userModel')

const createUser = async(req,res) => {
    try{
        const createdUser = await userModel.create(req.body)
        res.status(201).json({
            message: "User Created Successfully",
            data: createdUser,
        })
    }catch(err) {
        res.status(500).json({
            message: "Error cannot Created",
        })
    }
}
const getAllUser = async (req,res)=>{
    try{
        const user = await userModel.find()
        res.status(200).json({
            message:"user list",
            data: user,
        })
    }catch(err){
        res.status(500).json({
            message:"Erron in getting cart list",
        })
    }
}

module.exports = {
   createUser,getAllUser
}