const roleModel = require('../model/roleModel')

const createRole = async(req,res) => {
    try{
        const createdRole = await roleModel.create(req.body)
        res.status(201).json({
            message: "role choosed Successfully",
            data:createdRole,
        })
    }catch(err) {
        res.status(500).json({
            message: "Error cannot Created",
        })
    }
}
const getAllRole = async (req,res)=>{
    try{
        const role = await roleModel.find()
        res.status(200).json({
            message:"role list",
            data: role,
        })
    }catch(err){
        res.status(500).json({
            message:"Error in getting role list",
        })
    }
}

module.exports = {
    getAllRole,createRole
}