import mongoose from "mongoose";
const orderItemSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    }
})
const orderSchema=new mongoose.Schema({
   price:{
    type:Number,
    required:true
   },
   customer:{
    types:mongoose.Schema.Types.ObjectId,
    ref:"User"
   },
   orderItems:{
    type:[orderItemSchema]
   },
   address:{
    type:String,
    required:true
   },
   status:{
     type:String,
     enum:[
        "Pen","Canc","Del"
     ],
     default:"Pen"
   }


},{
    timestamps:true
})
 export const Order=mongoose.model("Order",userSchema)