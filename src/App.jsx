import { useState , useEffect } from 'react'

import { Input , Todos } from './components'

import './App.css'

function App() {
  const [todos , setTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then((res) => res.json())
    .then((res) => setTodos(res))
  },[])

  return (
    <>
      <h1>TO DO LIST</h1>
      <Input todos = {todos} setTodos = {setTodos}/>
      <Todos todos = {todos} setTodos = {setTodos}/>
    </>
  )
}

export default App