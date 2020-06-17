import {moviesAPI} from "../DAL/api";

const GET_POPULAR = 'GET_POPULAR';

const initialState={
    movies:null
};

const moviesReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_POPULAR:
            return {
                ...state,
                movies:action.data
            };
        default:
            return state;
    }
};
//action creators
export const setPopularMovies=(data)=>({type:GET_POPULAR, data});

//redux-thunks
export const getPopularMovies=()=>{
    return (dispatch)=>{
        moviesAPI.getPopularMovies().then(response=> {
            if (response.results) {
                dispatch(setPopularMovies(response.results));
            }
        });
    }
};

export default moviesReducer;