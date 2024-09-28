const mongoose=require('mongoose');

const reviewSchema=new mongoose.Schema({
    reviewId:{
        type:Number,
    },
    userId:{
        type:Number,
    },
    caterarId:{
        type:Number,
    },
    rating:{
        type:Number,
    },
    reviewText:{
        type:String,
    },
    reviewDate:{
        type:Date,
    }
})

const review=mongoose.model('review',reviewSchema);

module.exports=review;