const mongoose=require('mongoose');

const cartSchema=new mongoose.Schema({
    cartId:{
        type:Number,
    },
    userId:{
        type:Number,
    },
    dishId:{
        type:Number,
    },
    dishName:{
        type:String,
    },
    price:{
        type:Number,
    },
    caterarId:{
        type:Number,
    },
})

const cart=mongoose.model('cart',cartSchema);

module.exports=cart