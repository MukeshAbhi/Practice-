const express = require('express');
const cors = require('cors');
const { createTodo,updateTodo } = require('./types');
const {todo} = require('./db');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/todo',async (req,res)=>{
    const createLoad  = req.body;
    const parsedLoad = createTodo.safeParse(createLoad);
    if(!parsedLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    await todo.create({
        title: createLoad.title,
        description: createLoad.description,
        completed: false
    })

    res.json({
        msg: "completed"
    })
})

app.get('/todos',async(req,res)=> {
    
    const todos = await todo.find({});
    res.json(todos);
})

app.put('/completed',async (req,res)=>{
    const id = req.body;
    const parsedId = updateTodo.safeParse(id);
    if(!parsedId.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id: id
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen("3000")