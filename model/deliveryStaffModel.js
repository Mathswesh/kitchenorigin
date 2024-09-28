const mongoose=require('mongoose');

const deliveryStaffSchema=new mongoose.Schema({
    deliveryStaffId:{
        type:Number,
    },
    userId:{
        type:Number,
    },
    commission:{
        type:Number,
    },
    salary:{
        type:Number,
    }
})

const deliveryStaff=mongoose.model('deliveryStaff',deliveryStaffSchema);

module.exports=deliveryStaff;