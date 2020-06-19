import {tvshowsAPI} from "../DAL/api";

const GET_POPULAR_TVSHOWS = 'GET_POPULAR_TVSHOWS';
const GET_TOP_TVSHOWS = 'GET_TOP_TVSHOWS';

const initialState = {
    popularTvShows:null,
    topTvShows:null,
};

const tvShowsReducer = (state=initialState, action)=>{
    switch(action.type){
        case GET_POPULAR_TVSHOWS:
            return {...state, popularTvShows:action.data};
        case GET_TOP_TVSHOWS:
            return {...state, topTvShows:action.data};
        default:
            return state
    }
};

//actions
export const setPopularTvShows = (data)=>({type:GET_POPULAR_TVSHOWS, data});
export const setTopTvShows = (data)=>({type:GET_TOP_TVSHOWS, data});

//thunks

export const getPopularTvShows = ()=>{
    return (dispatch)=>{
        tvshowsAPI.queryPopularTvShows().then(response=>{
            if(response.results){
                dispatch(setPopularTvShows(response.results));
            }
        })
    }
};
export const getTopTvShows = ()=>{
    return (dispatch)=>{
        tvshowsAPI.queryTopTvShows().then(response=>{
            if(response.results){
                dispatch(setTopTvShows(response.results));
            }
        })
    }
};

export default tvShowsReducer;