import { ActionTypes } from "./Redux";

export const SetUserinformation =(userinfo)=>{
    return{
        type: ActionTypes.USER_INFORMATION,
        payload: userinfo,
    }
};

