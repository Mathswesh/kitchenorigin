const caterarModel = require('../model/caterarModel')

const createCaterar = async(req,res) => {
    try{
        const createdCaterar = await caterarModel.create(req.body)
        res.status(201).json({
            message: "Caterer Created Successfully",
            data:createdCaterar,
        })
    }catch(err) {
        res.status(500).json({
            message: "Error cannot Created",
        })
    }
}
const getAllCaterar = async (req,res)=>{
    try{
        const caterar = await caterarModel.find()
        res.status(200).json({
            message:"caterar list",
            data: caterar,
        })
    }catch(err){
        res.status(500).json({
            message:"Erron in getting caterar list",
        })
    }
}

module.exports = {
   createCaterar,
   getAllCaterar
}