import {userAPI} from "../DAL/api";

const SET_USER_ACCOUNT = 'SET_USER_ACCOUNT';
const SET_USER_LISTS = 'SET_USER_LISTS';
const SET_USER_FAVORITE_MOVIES = 'SET_USER_FAVORITE_MOVIES';
const SET_USER_FAVORITE_TV_SHOWS = 'SET_USER_FAVORITE_TV_SHOWS';
const SET_MOVIE_WATCHLIST = 'SET_MOVIE_WATCHLIST';
const SET_TV_WATCHLIST = 'SET_TV_WATCHLIST';
const SET_RATED_MOVIES = 'SET_RATED_MOVIES';
const SET_RATED_TV = 'SET_RATED_TV';

const initialState={
    userAccountData:null,
    currentUserAccountId:null,

    userLists: null,
    userFavoriteMovies: null,
    userFavoriteTvShows: null,

    userMovieWatchlist: null,
    userTvWatchlist: null,

    userRatedMovies: null,
    userRatedTv: null,
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
        case SET_MOVIE_WATCHLIST:
            return {...state, userMovieWatchlist: action.data.results};
        case SET_TV_WATCHLIST:
            return {...state, userTvWatchlist: action.data.results};
        case SET_RATED_MOVIES:
            return {...state, userRatedMovies: action.data.results};
        case SET_RATED_TV:
            return {...state, userRatedTv: action.data.results};
        default:
            return state;
    }
};

export const setUserAccountData = data =>({type:SET_USER_ACCOUNT, data});
export const setUserLists = data =>({type:SET_USER_LISTS, data});
export const setUserFavoriteMovies = data =>({type:SET_USER_FAVORITE_MOVIES, data});
export const setUserFavoriteTvShows = data =>({type:SET_USER_FAVORITE_TV_SHOWS, data});
export const setUserMovieWatchlist = data =>({type:SET_MOVIE_WATCHLIST, data});
export const setUserTvWatchlist = data =>({type:SET_TV_WATCHLIST, data});
export const setUserRatedMovies = data =>({type:SET_RATED_MOVIES, data});
export const setUserRatedTv = data =>({type:SET_RATED_TV, data});

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
export const getUserMovieWatchlist = () =>{
    return (dispatch)=>{
        userAPI.queryMovieWatchList().then(response=>{
                dispatch(setUserMovieWatchlist(response))
            }
        )
    }
};
export const getUserTvWatchlist = () =>{
    return (dispatch)=>{
        userAPI.queryTvSHowsWatchList().then(response=>{
                dispatch(setUserTvWatchlist(response))
            }
        )
    }
};
export const getUserRatedMovies = () =>{
    return (dispatch)=>{
        userAPI.queryRatedMovies().then(response=>{
                dispatch(setUserRatedMovies(response))
            }
        )
    }
};
export const getUserRatedTv = () =>{
    return (dispatch)=>{
        userAPI.queryRatedTvSHows().then(response=>{
                dispatch(setUserRatedTv(response))
            }
        )
    }
};

export default accountReducer;