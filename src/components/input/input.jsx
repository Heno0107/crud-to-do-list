import { useState , useEffect } from 'react'

import './input.css'

export function Input ({todos , add}) {
    const [text , setText] = useState('')
    
    return (
        <div className='inpContainer'>
            <input className= 'headInp' type='text' placeholder='Type text' value={text} onChange={(e) => setText(e.target.value)}/>
            <button className='inpBtn' onClick={() => add(text , setText)}>Add</button>
        </div>
    )
}

// {id : Date.now() , title : text , checked : false}