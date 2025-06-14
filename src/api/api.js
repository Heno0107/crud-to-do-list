import axios from "axios"

import { getTodoAction , postTodoAction , patchTodoAction , deleteTodoAction} from "../store/store"

const instance = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
})

export const API = {
    getTodos(dispatch){
        instance.get('/todos?_limit=10')
        .then((res) => dispatch(getTodoAction(res.data)))
    } ,
    postTodos(dispatch , body){
        instance.post('/todos' , body)
        .then((res) => dispatch(postTodoAction(res.data)))
    } ,
    patchTodos(dispatch , body , id ){
        instance.patch(`/todos/${id}` , body)
        .then((res) => dispatch(patchTodoAction(res.data , id)))
    } ,
    deleteTodos(dispatch , id){
        instance.delete(`/todos/${id}`)
        .then((res) => dispatch(deleteTodoAction()))
    }
}