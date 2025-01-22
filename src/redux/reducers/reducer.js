import { ADD_TODO,REMOVE_TODO } from "../actionType";

const initalState={
    todos:[],
};

export const todoReducer=(state=initalState,action)=>{
    switch(action.type){
        case ADD_TODO:
             return{...state,todos:state.todos.push(action.payload)};
        case REMOVE_TODO:
              return{...state,todos:state.todos.filter((task)=>task.payload.id!=action.payload.id)};
    }
}