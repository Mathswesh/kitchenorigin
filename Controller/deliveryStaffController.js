const deliveryStaffModel = require('../model/deliveryStaffModel')

const createdDeliveryStaff = async(req,res) => {
    try{
        const createdDeliveryStaff = await deliveryStaffModel.create(req.body)
        res.status(201).json({
            message: "Delivery Staff Created Successfully",
            data: createdDeliveryStaff,
        })
    }catch(err) {
        res.status(500).json({
            message: "Error cannot Created",
        })
    }
}
const getAllDeliveryStaff = async (req,res)=>{
    try{
        const deliveryStaff = await deliveryStaffModel.find()
        res.status(200).json({
            message:"delivery staff list",
            data: deliveryStaff,
        })
    }catch(err){
        res.status(500).json({
            message:"Erron in getting delivery staff list",
        })
    }
}

module.exports = {
    createdDeliveryStaff,getAllDeliveryStaff
}