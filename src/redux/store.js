
import {createStore,combineReducers} from 'redux';
import todoReducer from '../Redux/reducers/reducers'
import recycleBinReducer from './reducers/recycleBinReducer'; 
import { applyMiddleware } from 'redux';
import validatorMiddleWare from '../middleware/validatorMiddleware';
const rootReducer=combineReducers({
    todos:todoReducer,
    recycleBin:recycleBinReducer,
})
//const store = createStore(rootReducer);

export const store=createStore(rootReducer,applyMiddleware(validatorMiddleWare));