const express = require('express');
const { createTodo,updateTodo } = require('./types');

const app = express();

app.use(express.json());

app.post('/todo',(req,res)=>{
    const createLoad  = req.body;
    const parsedLoad = createTodo.safeParse(createLoad);
    if(!parsedLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
})

app.get('/todos',(req,res)=> {

})

app.put('/completed',(req,res)=>{
    const id = req.body;
    const parsedId = updateTodo.safeParse(id);
    if(!parsedId.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
})