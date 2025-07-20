import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    creditBalance:{type:Number, default:5},

})

const userModel= mongoose.models?.user || mongoose.model("user",userSchema) 
//it will first for any existing user. If not found,it will create new userModel using userSchema.

export default userModel;