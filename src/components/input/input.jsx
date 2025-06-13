import './input.css'

export function Input ({state , dispatch , postTodos}) {
    
    return (
        <div className='inpContainer'>
            <input className= 'headInp' type='text' placeholder='Type text' value={state.text} onChange={(e) => dispatch({type : 'textChange' , payload : {text : e.target.value}})}/>
            <button className='inpBtn' onClick={() => postTodos(dispatch , {id : Date.now() , title : state.text , completed : false})}>Add</button>
        </div>
    )
}