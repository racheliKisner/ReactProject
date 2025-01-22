import {useSelector ,UseDispatch } from "react-redux";
import { add_todo,remove_todo } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import todos from "./todos";
const addComponent=()=>{
    const todos=useSelector((state)=>state.todos);
    const dispatch=useDispatch();
    const [name, setName] = useState('');
    const [start, setStart] = useState('');
    const [finish, setFinish] = useState('');
    const [priority, setPriority] = useState('');
    return(
        <>
        <form>
            <input type="text" id="todo_name" onBlur={event => setName(event.target.value)}/>name
            <input type="text" id="todo_start" onBlur={event => setStart(event.target.value)}/>start
            <input type="text" id="todo_finish" onBlur={event => setFinish(event.target.value)}/>finish
            <input type="text" id="todo_priority" onBlur={event => setPriority(event.target.value)}/>priority
            <button onClick={()=>dispatch(add_todo({name:name,start:start,finish:finish,priority:priority}))}>ADD</button>
        </form>
       
        </>
    )
};
export default addComponent;