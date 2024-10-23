import mongoose from "mongoose";
new todoSchema=new mongoose.Schema({
  content:{
    type:String,
    required:true,
  },
  isCompleted:{
    type:Boolean,
    default:true
  },
  createdBy:{
    type:mongoose.Types.ObjectId,
    ref:"User"
  },
  subTodos:[
    {
        type:mongoose.Types.ObjectId, 
         ref:"subTodo"
    }
  ]

},{
    timestamps:true
})
export const Todo=mongoose.model("Todo",todoSchema)