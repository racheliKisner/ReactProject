import { ADD_TODO,REMOVE_TODO } from "./actionType";
export const add_todo=(payload)=>({
    type:ADD_TODO,
    payload:{start:"",finish:"",name:"",priority:""}
});
export const remove_todo=(payload)=>({
    type:REMOVE_TODO,
    payload,
});