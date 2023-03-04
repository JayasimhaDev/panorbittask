import { ActionTypes } from "./Redux";

const intialState ={
    userinfo: [],
};

export const userinfoReducer =(state= intialState,{type, payload})=>{
    switch(type){
        case ActionTypes.USER_INFORMATION:
            return{...state,userinfo:payload};
            default:
                return state;
    }
};


