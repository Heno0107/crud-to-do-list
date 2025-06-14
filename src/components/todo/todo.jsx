import { useState } from 'react'

import './todo.css'

export function Todo ({id , title , completed , editable , state , dispatch , patchTodos , deleteTodos}) {
    const [editText , setEditText] = useState(title)

    return (
        <div className='todo'>
            <input type="checkbox" checked = {completed} onChange={() => patchTodos(dispatch , {id : id , title : editText , completed : !completed , editable : false} , id )}/>
            {editable ? <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} onBlur={() => patchTodos(dispatch , {id : id , title : editText , completed : completed , editable : false} , id )}/> : <p onDoubleClick={() => dispatch({type : 'edit' , payload : {id , editable , editText}})}>{title}</p>}
            <button onClick={() => deleteTodos(id)}>X</button>
        </div>
    )
}