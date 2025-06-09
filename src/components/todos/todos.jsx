import { useReducer } from 'react'

import { Todo } from '../todo/todo'
import { reducer , initState } from '../../store/store'

import './todos.css'

export function Todos ({checkedChange , edit}) {
    const [state , dispatch] = useReducer(reducer , initState)

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
                            checkedChange = {checkedChange}
                            edit = {edit}/>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}