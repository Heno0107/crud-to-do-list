// BLL

export const initState = {
    todos : [] ,
    text : ''
}

export const reducer = (state , action) => {
    switch(action.type){
        case 'add' :
            console.log(state.todos)
            return {
                ...state ,
                todos : [...state.todos , {id : Date.now() , title : action.payload , completed : false , editable : false}]
            }
        case 'remove' :
            return {
                ...state ,
                todos : state.todos.filter((todo) => todo.id !== action.payload)
            }
        default : 
            return state;
    }
}