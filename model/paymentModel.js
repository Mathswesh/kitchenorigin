const mongoose=require('mongoose');

const paymentSchema=new mongoose.Schema({
    orderId:{
        type:Number,
    },
    paymentId:{
        type:Number,
    },
    paymentMethod:{
        type:String,
    },
    paymentDate:{
        type:Date,
    },
    amountPaid:{
        type:Number,
    },
    confirmationMsg:{
        type:String,
    }
})

const payment=mongoose.model('payment',paymentSchema);

module.exports=payment;