import { Todo } from '../todo/todo'

import './todos.css'

export function Todos ({todos , setTodos}) {
    console.log(todos)
    return (
        <div className='todos'>
            <ul>
                {
                    todos.map((todo) => {
                        return <li>
                            <Todo
                            key={todo.id}
                            id = {todo.id}
                            title = {todo.title}
                            completed = {todo.completed}
                            todos = {todos}
                            setTodos = {setTodos}/>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}