import { Todo } from '../todo/todo'

import './todos.css'

export function Todos ({state , dispatch , patchTodos , deleteTodos}) {

    return (
        <div className='todos'>
            <ul>
                {
                    state.todos.map((todo) => {
                        console.log(todo)
                        return <li key={todo.id}>
                            <Todo
                            key={todo.id}
                            id = {todo.id}
                            title = {todo.title}
                            completed = {todo.completed}
                            editable = {todo.editable}
                            state = {state}
                            dispatch = {dispatch}
                            patchTodos = {patchTodos}
                            deleteTodos = {deleteTodos}/>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}