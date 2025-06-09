import { useState , useReducer } from 'react'

import { reducer , initState } from '../../store/store'

import './input.css'

export function Input () {
    const [state , dispatch] = useReducer(reducer , initState)
    const [text , setText] = useState('')
    
    return (
        <div className='inpContainer'>
            <input className= 'headInp' type='text' placeholder='Type text' value={text} onChange={(e) => setText(e.target.value)}/>
            <button className='inpBtn' onClick={() => dispatch({type : 'add' , payload : text})}>Add</button>
        </div>
    )
}

// {id : Date.now() , title : text , checked : false}