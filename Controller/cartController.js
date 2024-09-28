const cartModel = require('../model/cartModel')

const createCart = async(req,res) => {
    try{
        const createdCart = await cartModel.create(req.body)
        res.status(201).json({
            message: "Cart Created Successfully",
            data:createdCart,
        })
    }catch(err) {
        res.status(500).json({
            message: "Error cannot Created",
        })
    }
}
const getAllCart = async (req,res)=>{
    try{
        const cart = await cartModel.find()
        res.status(200).json({
            message:"cart list",
            data: cart,
        })
    }catch(err){
        res.status(500).json({
            message:"Erron in getting cart list",
        })
    }
}

module.exports = {
    createCart,
    getAllCart
}