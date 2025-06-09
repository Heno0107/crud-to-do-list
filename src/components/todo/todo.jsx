import { useReducer, useState } from 'react'

import { reducer , initState } from '../../store/store'

import './todo.css'

export function Todo ({id , title , completed , editable , checkedChange , edit}) {
    const [state , dispatch] = useReducer(reducer , initState)
    const [editText , setEditText] = useState(title)

    return (
        <div className='todo'>
            <input type="checkbox" checked = {completed} onChange={() => checkedChange(id , completed)}/>
            {editable ? <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} onBlur={() => edit(id , editable , editText )}/>: <p onDoubleClick={() => edit(id , editable , editText)}>{title}</p>}
            <button onClick={() => dispatch({type : 'remove' , payload : id})}>X</button>
        </div>
    )
}