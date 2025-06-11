import { useState } from 'react'

import './todo.css'

export function Todo ({id , title , completed , editable , state , dispatch}) {
    const [editText , setEditText] = useState(title)

    return (
        <div className='todo'>
            <input type="checkbox" checked = {completed} onChange={() => dispatch({type : 'checkedChange' , payload : {id , completed}})}/>
            {editable ? <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} onBlur={() => dispatch({type : 'edit' , payload : {id , editable , editText}})}/>: <p onDoubleClick={() => dispatch({type : 'edit' , payload : {id , editable , editText}})}>{title}</p>}
            <button onClick={() => dispatch({type : 'remove' , payload : id})}>X</button>
        </div>
    )
}