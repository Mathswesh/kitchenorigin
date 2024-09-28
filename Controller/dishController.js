const dishModel = require('../model/dishModel')

const createDish= async(req,res) => {
    try{
        const createdDish = await dishModel.create(req.body)
        res.status(201).json({
            message: "Dish Created Successfully",
            data:createdDish,
        })
    }catch(err) {
        res.status(500).json({
            message: "Error cannot Created",
        })
    }
}
const getAllDish = async (req,res)=>{
    try{
        const dish = await dishModel.find()
        res.status(200).json({
            message:"Dish list",
            data: dish,
        })
    }catch(err){
        res.status(500).json({
            message:"Erron in getting cart list",
        })
    }
}

module.exports = {
    createDish,getAllDish
}