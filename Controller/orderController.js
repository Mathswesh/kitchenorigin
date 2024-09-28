const orderModel = require('../model/orderModel')

const createOrder = async(req,res) => {
    try{
        const createdOrder = await orderModel.create(req.body)
        res.status(201).json({
            message: "Order Created Successfully",
            data: createdOrder,
        })
    }catch(err) {
        res.status(500).json({
            message: "Error cannot Created",
        })
    }
}
const getAllOrder = async (req,res)=>{
    try{
        const order = await orderModel.find()
        res.status(200).json({
            message:"order list",
            data: order,
        })
    }catch(err){
        res.status(500).json({
            message:"Erron in getting order list",
        })
    }
}

module.exports = {
   getAllOrder,createOrder
}