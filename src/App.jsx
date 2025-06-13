import { useEffect, useReducer } from 'react'

import { Input , Todos } from './components'
import { reducer , initState } from './store/store'
import { API } from './api/api'

import './App.css'

function App() {
  const [state , dispatch] = useReducer(reducer , initState)

  useEffect(() => {
    API.getTodos(dispatch)
  },[])
  
  return (
    <>
      <h1>TO DO LIST</h1>
      <Input state = {state} dispatch = {dispatch} postTodos = {API.postTodos}/>
      <Todos state = {state} dispatch = {dispatch}/>
    </>
  )
}

export default App