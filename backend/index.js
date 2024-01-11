import { todoSchema,completedTodoSchema } from "./types";   
const express = require("express");
const mongoose = require("mongoose");
const zod = require("zod");
const app = express();
const port = 3000;
app.use(express.json());

app.post("/todo", (req, res) => {
     const createpayload = req.body;
     if(!todoSchema.safeParse(createpayload).success) {
        res.status(411).json({msg : "you send the wrong inputs"})
     } else {

     }

})

app.get("/todos", (req, res) => {

})

app.put("/todocompleted", (req, res) => {
   const id = req.body.id;
   const completed = req.body.completed;
   if(!completedTodoSchema.safeParse(id,completed).success) {

   }
})


app.listen(port, () => console.log('server running on port 3000'));