const mongoose=require('mongoose');

const roleSchema=new mongoose.Schema({
    roleId:{
        type:Number,
    },
    roleName:{
        type:String,
    }
})

const role=mongoose.model('role',roleSchema);

module.exports=role;