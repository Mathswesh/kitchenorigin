const mongoose=require('mongoose');

const dishSchema=new mongoose.Schema({
    dishId:{
        type:Number,
    },
    caterarId:{
        type:Number,
    },
    dishName:{
        type:String,
    },
    price:{
        type:Number,
    },
    prepareTime:{
        type:Date,
    },
})

const dish=mongoose.model('dish',dishSchema);

module.exports=dish;