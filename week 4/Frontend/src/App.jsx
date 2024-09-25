import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos,setTodos] = useState([]);

    fetch("http://localhost:3000/todos")
    .then(async function(res) {
      const data = await res.json();
      setTodos(data.todos);
    })
   
  
  console.log(todos)
  return (
    
      <div>
        <CreateTodo></CreateTodo>
        <Todos todos ={todos} /> 
      </div>
  )
}

export default App
