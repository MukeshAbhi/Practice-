const zod = require('zod');

// body input
//          {
//             title: string,
//             description: string
//          } 
//          {
//              id: string
//          }

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})

module.exports= {
    createTodo: createTodo,
    updateTodo: updateTodo
}