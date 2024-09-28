
const mongoose=require('mongoose');

const dbconnection=async () =>{
    const connection=await mongoose.connect("mongodb://localhost:27017/fooddelivery")
    console.log("Db Connected")
    return connection
}
module.exports=dbconnection;