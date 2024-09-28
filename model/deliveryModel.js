const mongoose=require('mongoose');


const deliverySchema=new mongoose.Schema({
    deliveryId:{
        type:Number,
    },
    userId:{
        type:Number,
    },
    orderId:{
        type:Number,
    },
    deliveryStaffId:{
        type:Number,
    },
    pickupLocation:{
        type:String,
    },
    destination:{
        type:String,
    },
    status:{
        type:Boolean,
    }
})

const delivery=mongoose.model('delivery',deliverySchema);

module.exports=delivery;