const reviewModel = require('../model/reviewModel')

const createReview = async(req,res) => {
    try{
        const createdreview = await reviewModel.create(req.body)
        res.status(201).json({
            message: "Review Created Successfully",
            data:createdreview,
        })
    }catch(err) {
        res.status(500).json({
            message: "Error cannot Created",
        })
    }
}
const getAllReview = async (req,res)=>{
    try{
        const review = await reviewModel.find()
        res.status(200).json({
            message:"review list",
            data: review,
        })
    }catch(err){
        res.status(500).json({
            message:"Erron in getting review list",
        })
    }
}

module.exports = {
   createReview,getAllReview
}