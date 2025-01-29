import {REMOVE_TODO,RESTORE_TODO,} from "../actionType"

const initialState={
    todos:[],
}


const recycleBinReducer = (state = initialState,action)=>{
    switch(action.type){
        case RESTORE_TODO:
            return {...state, todos: state.todos.filter((todo) => todo.id != action.payload.id)}
        case REMOVE_TODO:
            return { ...state,todos: state.todos.concat(action.payload)}
        default:
            return state;
    }
}
export default recycleBinReducer;