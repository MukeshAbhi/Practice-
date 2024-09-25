import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos,setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async function(res) {
        const data = await res.json();
        console.log(data,"point");
        setTodos(data);
      })
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    
      <div>
        <CreateTodo></CreateTodo>
        <Todos todos ={todos} /> 
      </div>
  )
}

export default App
