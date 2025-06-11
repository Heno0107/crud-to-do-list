import './input.css'

export function Input ({state , dispatch}) {
    
    return (
        <div className='inpContainer'>
            <input className= 'headInp' type='text' placeholder='Type text' value={state.text} onChange={(e) => dispatch({type : 'textChange' , payload : {text : e.target.value}})}/>
            <button className='inpBtn' onClick={() => dispatch({type : 'add' , payload : state.text})}>Add</button>
        </div>
    )
}