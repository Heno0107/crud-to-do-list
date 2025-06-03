import { useState , useEffect } from 'react'
import axios from 'axios'

import { Input , Todos } from './components'

import './App.css'

const instance = axios.create({
  baseURL : 'https://jsonplaceholder.typicode.com/'
})

function App() {
  const [todos , setTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then((res) => res.json())
    .then((res) => setTodos(res))
  },[])

  function add (text , setText) {
    if(text.trim()){
        instance.post('todos' , {id : Date.now() , title : text , completed : false})
        .then((res) => setTodos([...todos , res.data]))
        setText('')
    }
}

function remove (id) {
  instance.delete(`todos/${id}`)
  .then((res) => setTodos([...todos.filter((todo) => todo.id !== id)]))
}

  function checkedChange (id , title , completed) {
    instance.patch(`todos/${id}` , {id : id , title : title , completed : !completed})
    .then((res) => setTodos([...todos.filter((todo) => todo.id !== id) , res.data]))
}

  return (
    <>
      <h1>TO DO LIST</h1>
      <Input todos = {todos} add = {add}/>
      <Todos todos = {todos} remove = {remove} checkedChange = {checkedChange}/>
    </>
  )
}

export default App