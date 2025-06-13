import axios from "axios"

import { getTodoAction , postTodoAction } from "../store/store"

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
    }
}