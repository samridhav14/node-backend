import mongoose from "mongoose";
new subTodoSchema=new mongoose.Schema({
  
},{
    timestamps:true
})
export const subTodo=mongoose.model("subTodo",userSchema)