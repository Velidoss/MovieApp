import {moviesAPI} from "../DAL/api";

const GET_POPULAR = 'GET_POPULAR';
const GET_NOW_PLAYING = 'GET_NOW_PLAYING';
const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS';
const GET_MOVIE_GENRES = 'GET_MOVIE_GENRES';
const GET_MOVIE_CREDITS = 'GET_MOVIE_CREDITS';

const initialState={
    movies:null,
    nowPlayingMovies:null,
    movieDetails:null,
    movieGenres:null,
    movieCredits:null
};

const moviesReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_POPULAR:
            return {
                ...state,
                movies:action.data
            };
        case GET_NOW_PLAYING:
            return {
                ...state,
                nowPlayingMovies:action.data
            };
        case GET_MOVIE_DETAILS:
            return{
                ...state,
                movieDetails:action.data
            };
        case GET_MOVIE_GENRES:
            return{
                ...state,
                movieGenres:action.data
            };
        case GET_MOVIE_CREDITS:
            return{
                ...state,
                movieCredits: action.data
            };
        default:
            return state;
    }
};
//action creators
export const setPopularMovies=(data)=>({type:GET_POPULAR, data});
export const setNowPlayingMovies=(data)=>({type:GET_NOW_PLAYING, data});
export const setMovieDetails=(data)=>({type:GET_MOVIE_DETAILS, data});
export const setMovieGenres=(data)=>({type:GET_MOVIE_GENRES, data});
export const setMovieCredits=(data)=>({type:GET_MOVIE_CREDITS, data});

//redux-thunks
export const getPopularMovies=()=>{
    return (dispatch)=>{
        moviesAPI.queryPopularMovies().then(response=> {
            if (response.results) {
                dispatch(setPopularMovies(response.results));
            }
        });
    }
};
export const getNowPlayingMovies=()=>{
    return (dispatch)=>{
        moviesAPI.queryNowPlayingMovies().then(response=> {
            if (response.results) {
                dispatch(setNowPlayingMovies(response.results));
            }
        });
    }
};
export const getMovieDetails=(movieId)=>{
    return (dispatch)=>{
        moviesAPI.queryMovieDetails(movieId).then(response=> {
            if (response) {
                dispatch(setMovieDetails(response));
            }
        });
    }
};
export const getMovieGenres=()=>{
    return (dispatch)=>{
        moviesAPI.queryMoviesGenres().then(response=>{
            if(response){
                dispatch(setMovieGenres(response));
            }
        })
    }
};
export const getMovieCredits=(movieId)=>{
    return (dispatch)=>{
        moviesAPI.queryMovieCredits(movieId).then(response=>{
            if(response){
                dispatch(setMovieCredits(response));
            }
        })
    }
};

export default moviesReducer;