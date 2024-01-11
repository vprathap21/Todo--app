const { todoSchema,completedTodoSchema } = require("./types");   
const { todo } = require("./db");
const express = require("express");

const zod = require("zod");
const app = express();
const cors = require("cors");

const port = 3000;
app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
     const createpayload = req.body;
     if(!todoSchema.safeParse(createpayload).success) {
        res.status(411).json({msg : "you send the wrong inputs"})
     } else {
       await todo.create ({
        title : createpayload.title,
        description : createpayload.description,
        completed : false
       })
       res.send("todo created");
     }

})

app.get("/todos", async (req, res) => {
    const todos =  await todo.find({});
    res.json(todos);
})

app.put("/todocompleted",async (req, res) => {
    const createpayload = req.body;
    if(!todoSchema.safeParse(createpayload).success) {
       res.status(411).json({msg : "you send the wrong inputs"})
    } else {
        await todo.updae({
            _id : req.body.id
        }, {
            completed : true
        })
        res.json({msg : "todo marked as completed"});
        }
    }
)


app.listen(port, () => console.log('server running on port 3000'));