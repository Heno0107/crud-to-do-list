import { Todo } from '../todo/todo'

import './todos.css'

export function Todos ({state , dispatch}) {

    return (
        <div className='todos'>
            <ul>
                {
                    state.todos.map((todo) => {
                        return <li>
                            <Todo
                            key={todo.id}
                            id = {todo.id}
                            title = {todo.title}
                            completed = {todo.completed}
                            editable = {todo.editable}
                            state = {state}
                            dispatch = {dispatch}/>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}