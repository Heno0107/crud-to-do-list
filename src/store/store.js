// BLL
const GET = 'get'
const POST = 'post'
const PATCH = 'patch'
const DELETE = 'delete'

export const initState = {
    todos : [] ,
    text : ''
}

export const reducer = (state , action) => {
    switch(action.type){
        // case 'remove' :
        //     return {
        //         ...state ,
        //         todos : state.todos.filter((todo) => todo.id !== action.payload)
        //     }
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
                    if(action.payload.editText){
                        if(todo.id === action.payload.id){
                          return {
                            ...todo ,
                            editable : !action.payload.editable ,
                            title : action.payload.editText
                          }
                        }
                      }})
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
        case POST :
            if(state.text){
            return {
                ...state ,
                todos : [...state.todos , action.payload] ,
                text : ''
            }}else{
                return state
            }
        case PATCH :
            return {
                ...state ,
                todos : [...state.todos.filter((todo) => todo.id !== action.payload.id) , action.payload.data]
            }
        case DELETE :
            return {
                ...state , 
                todos : state.todos //????
            }
        default : 
            return state;
    }
}

export function getTodoAction(data){
    return {type : GET , payload : data}
}

export function postTodoAction(data){
    return {type : POST , payload : data} 
}

export function patchTodoAction(data , id){
    return {type : PATCH , payload : {data , id}}
}

export function deleteTodoAction(){
    return {type : DELETE}
}