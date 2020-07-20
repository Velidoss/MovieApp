import {checkSession, createSessionId} from "./authReducer";
import Cookies from "js-cookie";

const SET_INITIALISED_SUCCESS = 'SET_INITIALISED_SUCCESS';

let initialState = {
    initialised: false
};

const appReducer = (state=initialState, action)=>{
    switch(action.type){
        case SET_INITIALISED_SUCCESS:
            return {...state, initialised: true};
        default: return state;
    }
};

export const setInitialisedSuccess = ()=>({type:SET_INITIALISED_SUCCESS} );


export const checkRequestToken = () =>{

};
export const initialiseApp = () =>{
    return (dispatch)=>{
        let promise = new Promise((resolve, reject)=>{
            setTimeout(()=>resolve(dispatch(checkSession())), 500);
        });
        promise.then(result=>{

            dispatch(setInitialisedSuccess());
        });


    }
};

export default appReducer;