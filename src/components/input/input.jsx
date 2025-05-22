import { useState , useEffect } from 'react'

import './input.css'

export function Input ({todos , setTodos}) {
    const [text , setText] = useState('')

    function add () {
        if(text.trim()){
            fetch('https://jsonplaceholder.typicode.com/todos' , {
                method : 'POST',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify({id : Date.now() , title : text , completed : false})
            })
            .then((res) => res.json())
            .then((res) => setTodos([...todos , res]))
            setText('')
        }
    }

    return (
        <div className='inpContainer'>
            <input className= 'headInp' type='text' placeholder='Type text' value={text} onChange={(e) => setText(e.target.value)}/>
            <button className='inpBtn' onClick={add}>Add</button>
        </div>
    )
}

// {id : Date.now() , title : text , checked : false}