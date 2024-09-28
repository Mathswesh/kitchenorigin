const paymentModel = require('../model/paymentModel')

const createPayment = async(req,res) => {
    try{
        const createdPayment = await paymentModel.create(req.body)
        res.status(201).json({
            message: "payment Created Successfully",
            data:createdPayment,
        })
    }catch(err) {
        res.status(500).json({
            message: "Error cannot Created",
        })
    }
}
const getAllPayment = async (req,res)=>{
    try{
        const payment = await paymentModel.find()
        res.status(200).json({
            message:"payment list",
            data: payment,
        })
    }catch(err){
        res.status(500).json({
            message:"Erron in getting payment list",
        })
    }
}

module.exports = {
   createPayment,getAllPayment
}