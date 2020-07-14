import {userAPI} from "../DAL/api";

const SET_USER_ACCOUNT = 'SET_USER_ACCOUNT';
const SET_USER_LISTS = 'SET_USER_LISTS';
const SET_USER_FAVORITE_MOVIES = 'SET_USER_FAVORITE_MOVIES';
const SET_USER_FAVORITE_TV_SHOWS = 'SET_USER_FAVORITE_TV_SHOWS';

const initialState={
    userAccountData:null,
    currentUserAccountId:null,

    userLists: null,
    userFavoriteMovies: null,
    userFavoriteTvShows: null,
};

const accountReducer=(state=initialState, action)=>{
    switch(action.type){
        case SET_USER_ACCOUNT:
            return {...state, userAccountData: action.data, currentUserAccountId:action.data.id};
        case SET_USER_LISTS:
            return {...state, userLists: action.data.results};
        case SET_USER_FAVORITE_MOVIES:
            return {...state, userFavoriteMovies: action.data.results};
        case SET_USER_FAVORITE_TV_SHOWS:
            return {...state, userFavoriteTvShows: action.data.results};
        default:
            return state;
    }
};

export const setUserAccountData = data =>({type:SET_USER_ACCOUNT, data});
export const setUserLists = data =>({type:SET_USER_LISTS, data});
export const setUserFavoriteMovies = data =>({type:SET_USER_FAVORITE_MOVIES, data});
export const setUserFavoriteTvShows = data =>({type:SET_USER_FAVORITE_TV_SHOWS, data});


//thunks

export const getUserAccData = () =>{
    return (dispatch)=>{
        userAPI.queryAccDetails().then(response=>{
            dispatch(setUserAccountData(response))
            }
        )
    }
};
export const getCreatedLists = () =>{
    return (dispatch)=>{
        userAPI.queryCreatedLists().then(response=>{
                dispatch(setUserLists(response))
            }
        )
    }
};
export const getUserFavoriteMovies = () =>{
    return (dispatch)=>{
        userAPI.queryFavoriteMovies().then(response=>{
                dispatch(setUserFavoriteMovies(response))
            }
        )
    }
};
export const getUserFavoriteTvShows = () =>{
    return (dispatch)=>{
        userAPI.queryFavoriteTvShows().then(response=>{
                dispatch(setUserFavoriteTvShows(response))
            }
        )
    }
};

export default accountReducer;