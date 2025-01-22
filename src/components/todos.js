import { useSelector } from "react-redux";
import { add_todo,remove_todo } from "../redux/actions";
import { useDispatch } from "react-redux";
import addComponent from "./form";
const todos=()=>{
        const todo=useSelector((state)=>state.todos);
        const dispatch=useDispatch();
        const tableRows = todo.map((element) => {
         return(
            <>
            <ul className="items">
                <li>{element.name}</li>
                <li>{element.start}</li>
                <li>{element.finish}</li>
                <li>{element.priority}</li>
            </ul>
            <button  onClick={()=>dispatch(remove_todo(element.name))}>REMOVE</button>
            </>
        );
        } 
        
    );
       
}
export default todos;