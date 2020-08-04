import {authAPI} from './../DAL/api'
import React from "react";
import Cookies from 'js-cookie'
import cookiesAPI from "../DAL/Cookies/CookiesAPI";

const AUTH_USER = 'AUTH-USER';
const SET_REQUEST_TOKEN = 'SET_REQUEST_TOKEN';
const SET_GUEST_SESSION_ID = 'SET_GUEST_SESSION_ID';
const SET_IS_AUTH = 'SET_IS_AUTH';
const UNSET_SESSION_ID = 'UNSET_SESSION_ID';
const UNSET_IS_AUTH = 'UNSET_IS_AUTH';

const initialState = {
    session_id:null,
    isAuth: false,
};

const authReducer =(state=initialState, action)=> {
    switch(action.type){
        case SET_REQUEST_TOKEN:
            return {...state, request_token:action.requestToken};
        case AUTH_USER:
            return {...state, session_id:action.sessionId};
        case SET_GUEST_SESSION_ID:
            return {...state, guestSessionId:action.guestSessionId.guest_session_id};
        case SET_IS_AUTH :
            return {...state, isAuth: true, session_id: action.session_id};
        case UNSET_IS_AUTH :
            return {...state, isAuth: false};
        case UNSET_SESSION_ID:
            return {...state, session_id: null};
        default:
            return state
    }
};

// action creators
export const setSessionId = sessionId =>({type:AUTH_USER, sessionId});
export const setRequestToken = requestToken=>({type:SET_REQUEST_TOKEN, requestToken});
export const setGuestSessionId = guestSessionId=>({type:SET_GUEST_SESSION_ID, guestSessionId});
export const setIsAuth = (session_id) =>({type:SET_IS_AUTH, session_id});
export const unSetIsAuth = () =>({type:UNSET_IS_AUTH});
export const unsetSessionId = () =>({type:UNSET_SESSION_ID});

//thunk creators
export const authUser = ()=>{
    return ()=>{
        authAPI.newRequestToken().then(response=>{
            cookiesAPI.setRequestTokenCookie(response);
            authAPI.authRequestToken(response);
        });
    }
};

export const createSessionId = (requestToken) =>{
    return (dispatch)=>{
        authAPI.createSessionId(requestToken).then(response=>{
            cookiesAPI.deleteRequestTokenCookie();
            cookiesAPI.setSessionCookie(response);
            dispatch(setSessionId(response));
            dispatch(checkSession());
        });
    }
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
                Cookies.set('session_id', response.request_token);
                return dispatch(setSessionId(response.request_token));
            })
        })
    }
};

export const logout = ()=>{
    return (dispatch)=>{
        let session = cookiesAPI.getSessionCookie();
        authAPI.deleteSession(session).then(()=>{
            cookiesAPI.deleteSessionCookie();
            dispatch(unsetSessionId());
            dispatch(checkSession());
            return alert('You have logged out!');
        })
    }
};

export const checkSession = () =>{
    return (dispatch)=>{
        let session_id = cookiesAPI.getSessionCookie();
        if(session_id){
            dispatch(setIsAuth(session_id));
        }else{
            dispatch(unSetIsAuth());
        }
    }
};

export default authReducer;