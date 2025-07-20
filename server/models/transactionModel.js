import mongoose from "mongoose";

const transactionSchema= new mongoose.Schema({
    userId:{type:String,require:true},
    planId:{type:String,require:true},
    amount:{type:Number,require:true},
    credits:{type:Number,require:true},
    payment:{type:Boolean,default:false},
    date:{type:Number},
})

const transactionModel= mongoose.models.transaction || mongoose.model("transaction",transactionSchema) //it will first for any existing user. If not found,it will create new userModel using userSchema.

export default transactionModel;