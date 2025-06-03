import { Todo } from '../todo/todo'

import './todos.css'

export function Todos ({todos , remove , checkedChange}) {
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
                            remove={remove}
                            checkedChange = {checkedChange}/>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}