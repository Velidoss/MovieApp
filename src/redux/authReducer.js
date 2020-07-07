import {authAPI} from './../DAL/api'
import keys from "../config/config";
import React from "react";
import {Redirect} from "react-router-dom";

const AUTH_USER = 'AUTH-USER';
const SET_REQUEST_TOKEN = 'SET_REQUEST_TOKEN';
const SET_GUEST_SESSION_ID = 'SET_GUEST_SESSION_ID';

const initialState = {
    request_token:null,
    session_id: null,
    guestSessionId: null
};

const authReducer =(state=initialState, action)=> {
    switch(action.type){
        case SET_REQUEST_TOKEN:
            return {...state, request_token:action.requestToken};
        case AUTH_USER:
            return {...state, session_id:action.sessionId};
        case SET_GUEST_SESSION_ID:
            return {...state, guestSessionId:action.guestSessionId.guest_session_id};
        default:
            return state
    }

};

// action creators
export const setSessionId = sessionId =>({type:AUTH_USER, sessionId});
export const setRequestToken = requestToken=>({type:SET_REQUEST_TOKEN, requestToken});
export const setGuestSessionId = guestSessionId=>({type:SET_GUEST_SESSION_ID, guestSessionId});

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
export const makeGuestSessionId = () =>{
    return (dispatch)=>{
        authAPI.queryGuestSessionId().then(response=>{
            dispatch(setGuestSessionId(response));
        })
    }
};

export const authWithLogin = (username, password) =>{
    return (dispatch)=>{
        authAPI.newRequestToken().then(response=>{
            authAPI.authLogin(username, password, response).then(response=>{
                return dispatch(setSessionId(response));
            })
        })
    }
}

export default authReducer;