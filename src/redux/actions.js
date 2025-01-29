import {ADD_TODO, REMOVEFROMRECYCLEBIN_TODO, REMOVE_TODO, RESTORE_TODO} from "./actionType"

export const addToDoAction = (payload)=>({
    type:ADD_TODO,
    payload,
});

export const removeToDoAction = (payload)=>({
    type:REMOVE_TODO,
    payload,

});

export const restoreToDoAction = (payload)=>({
    type:RESTORE_TODO,
    payload,

});
export const removeFromRecycleBinToDoAction = (payload)=>({
    type:REMOVEFROMRECYCLEBIN_TODO,
    payload,

});

