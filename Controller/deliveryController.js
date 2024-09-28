const deliveryModel = require('../model/deliveryModel')

const createDelivery = async(req,res) => {
    try{
        const createdDelivery = await deliveryModel.create(req.body)
        res.status(201).json({
            message: "Delivery Created Successfully",
            data:createdDelivery,
        })
    }catch(err) {
        res.status(500).json({
            message: "Error cannot Created",
        })
    }
}
const getAlldelivery = async (req,res)=>{
    try{
        const caterar = await caterarModel.find()
        res.status(200).json({
            message:"delivery list",
            data: caterar,
        })
    }catch(err){
        res.status(500).json({
            message:"Erron in getting delivery list",
        })
    }
}

module.exports = {
   createDelivery,
   getAlldelivery
}