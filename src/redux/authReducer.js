import {authAPI} from './../DAL/api'

const AUTH_USER = 'AUTH-USER';
const SET_REQUEST_TOKEN = 'SET_REQUEST_TOKEN';

const initialState = {
    request_token:null,
    session_id: null
};

const authReducer =(state=initialState, action)=> {
    switch(action.type){
        case SET_REQUEST_TOKEN:
            return {...state, request_token:action.requestToken};
        case AUTH_USER:
            return {...state, session_id:action.sessionId};
        default:
            return state
    }

};

// action creators
export const setSessionId = sessionId =>({type:AUTH_USER, sessionId});
export const setRequestToken = requestToken=>({type:SET_REQUEST_TOKEN, requestToken});

//thunk creators
export const authUser = ()=>{
    return (dispatch)=>{
        authAPI.newRequestToken().then(response=>{
                dispatch(setRequestToken(response));
            });
        }
       // authAPI.authRequestToken(request_token);
       // dispatch(setSessionId(authAPI.createSessionId(authAPI.newRequestToken())));



};

export default authReducer;