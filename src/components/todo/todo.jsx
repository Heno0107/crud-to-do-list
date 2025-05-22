import './todo.css'

export function Todo ({id , title , completed , todos , setTodos}) {

    function remove (id) {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    function checkedChange (id) {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method : 'PATCH',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify({id : id , title : title , completed : !completed})
        })
        .then((res) => res.json())
        .then((res) => setTodos([...todos.filter((todo) => todo.id !== id) , res]))
    }

    return (
        <div className='todo'>
            <input type="checkbox" checked = {completed} onChange={() => checkedChange(id)}/>
            <p>{title}</p>
            <button onClick={() => remove(id)}>X</button>
        </div>
    )
}