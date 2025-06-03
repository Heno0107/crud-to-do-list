import './todo.css'

export function Todo ({id , title , completed  , remove , checkedChange}) {

    return (
        <div className='todo'>
            <input type="checkbox" checked = {completed} onChange={() => checkedChange(id , title , completed)}/>
            <p>{title}</p>
            <button onClick={() => remove(id)}>X</button>
        </div>
    )
}