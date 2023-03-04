import {combineReducers} from "redux";
import { userinfoReducer} from './Reducers';

const Reducers = combineReducers({
    user_information : userinfoReducer,
})

export default Reducers;