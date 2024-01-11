const mongoose = require("mongoose");
const { boolean } = require("zod");
 /* 
 todo {
    title : string
    description : string
    completed : boolean
 }
 */
mongoose.connect("mongodb+srv://211501064:WLbe4QzVUN7EJ0Vh@cluster0.so3qcau.mongodb.net/todo_app");

const todoSchema = new mongoose.Schema( {
    title : String,
    description : String,
    completed : Boolean
    
})
const todo = mongoose.model("todos",todoSchema);
module.exports = {
    todo
}