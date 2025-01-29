import { ADD_TODO } from "../redux/actionType";

const validatorMiddleWare=store=>next=>action=>{
    if(action.type==ADD_TODO){
        if(action.payload.name==''||action.payload.start==''||action.payload.finish==''||action.payload.priority=='')
            console.log("null");
            return;
    }   
     next(action);
};
export default validatorMiddleWare;