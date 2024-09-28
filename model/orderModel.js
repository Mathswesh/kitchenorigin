const mongoose=require('mongoose');

const orderSchema=new mongoose.Schema({
    orderId:{
        type:Number,
    },
    userId:{
        type:Number,
    },
    caterarId:{
        type:Number,
    },
    orderdate:{
        type:Date,
    },
    orderstatus:{
        type:Boolean,
    },
    amount:{
        type:Number,
    }
})

const order=mongoose.model('order',orderSchema);

module.exports=order;