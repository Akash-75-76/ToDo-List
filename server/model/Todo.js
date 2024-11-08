import mongoose, { mongo } from "mongoose";

const TodoSchema=new mongoose.Schema({
    data:{
        type:String,
        required:true
    },
    done:{
        type:Boolean,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const todo=mongoose.model('todo',TodoSchema);
export default todo;