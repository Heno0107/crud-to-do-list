// BLL
const GET = 'get'

export const initState = {
    todos : [] ,
    text : ''
}

export const reducer = (state , action) => {
    switch(action.type){
        case 'add' :
            return {
                ...state ,
                todos : [...state.todos , {id : Date.now() , title : action.payload , completed : false , editable : false}] ,
                text : ''
            }
        case 'remove' :
            return {
                ...state ,
                todos : state.todos.filter((todo) => todo.id !== action.payload)
            }
        case 'checkedChange' :
            return {
                ...state ,
                todos : state.todos.map((todo) => {
                    if(todo.id === action.payload.id){
                      return {
                        ...todo ,
                        completed : !action.payload.completed
                      }
                    } else {
                      return todo
                    }
                  })
            }
        case 'edit' :
            return {
                ...state ,
                todos : state.todos.map((todo) => {
                    if(action.payload.editText)
                        if(todo.id === action.payload.id){
                          return {
                            ...todo ,
                            editable : !action.payload.editable ,
                            title : action.payload.editText
                          }
                        }
                      })
            }
        case 'textChange' :
            return {
                ...state ,
                text : action.payload.text
            }
        case GET :
            return {
                ...state ,
                todos : action.payload
            }
        default : 
            return state;
    }
}

export function getTodoAction(data){
    return {type : GET , payload : data}
}