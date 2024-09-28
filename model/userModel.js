const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    userId:{
        type:Number
    },
    roleId:{
        type:Number,
    },
    userName:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    phoneNumber:{
        type:Number,
    },
    address:{
        type:String,
    }
})

const user=mongoose.model('user',userSchema);

module.exports=user