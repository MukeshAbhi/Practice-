const mongoose = require('mongoose')
//to create the schema for mongoda
// Todo{
//     title: string,
//     description : string,
//     completed : boolean

// }

mongoose.connect("mongodb+srv://abhimukesh284:qZ4cZSZXTQO4aWD5@cluster0.kjhif.mongodb.net/newTodo")

const todoSchema = mongoose.Schema({
    title: String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todo', todoSchema);

module.exports= {
    todo
}