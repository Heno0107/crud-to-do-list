import { useReducer, useState } from 'react'

import { Input , Todos } from './components'
import { reducer , initState } from './store/store'

import './App.css'

function App() {
  const [state , dispatch] = useReducer(reducer , initState)

  const [todos , setTodos] = useState([])

// function add (text , setText) {
//   if(text.trim()){
//     setTodos([...todos , {id : Date.now() , title : text , completed : false , editable : false}])
//     setText('')
//   }
// }

// function remove (id) {
//   setTodos([...todos.filter((todo) => todo.id !== id)])
// }

function checkedChange (id , completed) {
  setTodos(todos.map((todo) => {
    if(todo.id === id){
      return {
        ...todo ,
        completed : !completed
      }
    } else {
      return todo
    }
  }))
}

function edit (id , editable , editText ) {
  if(editText){
  setTodos(todos.map((todo) => {
    if(todo.id === id){
      return {
        ...todo ,
        editable : !editable ,
        title : editText
      }
    }
  }))}
}

  return (
    <>
      <h1>TO DO LIST</h1>
      <Input />
      <Todos checkedChange = {checkedChange} edit = {edit}/>
    </>
  )
}

export default App