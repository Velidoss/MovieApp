import {tvshowsAPI} from "../DAL/api";

const GET_POPULAR_TVSHOWS = 'GET_POPULAR_TVSHOWS';
const GET_TOP_TVSHOWS = 'GET_TOP_TVSHOWS';
const GET_TV_SHOWS_GENRES = 'GET_TV_SHOWS_GENRES';
const GET_TV_SHOW_DETAILS = 'GET_TV_SHOW_DETAILS';
const GET_TV_SHOW_CREDITS = 'GET_TV_SHOW_CREDITS';
const GET_TV_SHOW_IMAGES = 'GET_TV_SHOW_IMAGES';

const initialState = {
    popularTvShows:null,
    topTvShows:null,
    tvShowsGenres:null,
    tvShowDetails:null,
    tvShowCredits:null,
    tvShowImages:null,

    currentPage:1,
    totalPages:null,
};

const tvShowsReducer = (state=initialState, action)=>{
    switch(action.type){
        case GET_POPULAR_TVSHOWS:
            return {...state, popularTvShows:action.data.results, currentPage: action.data.page, totalPages:action.data.total_pages};
        case GET_TOP_TVSHOWS:
            return {...state, topTvShows:action.data.results, currentPage: action.data.page, totalPages:action.data.total_pages};
        case GET_TV_SHOWS_GENRES:
            return {...state, tvShowsGenres:action.data};
        case GET_TV_SHOW_DETAILS:
            return{...state, tvShowDetails:action.data};
        case GET_TV_SHOW_CREDITS:
            return{...state, tvShowCredits: action.data};
        case GET_TV_SHOW_IMAGES:
            return{...state, tvShowImages:action.data};
        default:
            return state
    }
};

//actions
export const setPopularTvShows = (data)=>({type:GET_POPULAR_TVSHOWS, data});
export const setTopTvShows = (data)=>({type:GET_TOP_TVSHOWS, data});
export const setTvShowsGenres = (data)=>({type:GET_TV_SHOWS_GENRES, data});
export const setTvShowDetails=(data)=>({type:GET_TV_SHOW_DETAILS, data});
export const setTvShowCredits=(data)=>({type:GET_TV_SHOW_CREDITS, data});
export const setTvShowImages=(data)=>({type:GET_TV_SHOW_IMAGES, data});

//thunks

export const getPopularTvShows = (page)=>{
    return (dispatch)=>{
        tvshowsAPI.queryPopularTvShows(page).then(response=>{
            if(response.results){
                dispatch(setPopularTvShows(response));
            }
        })
    }
};
export const getTopTvShows = (page)=>{
    return (dispatch)=>{
        tvshowsAPI.queryTopTvShows(page).then(response=>{
            if(response.results){
                dispatch(setTopTvShows(response));
            }
        })
    }
};
export const getTvShowsGenres = () =>{
    return (dispatch)=>{
        tvshowsAPI.queryTvShowsGenres().then(response=>{
            if(response){
                dispatch(setTvShowsGenres(response));
            }
        })
    }
};

export const getTvShowDetails = (tvshowId)=>{
    return (dispatch)=>{
        tvshowsAPI.queryTvShowDetails(tvshowId).then(response=>{
            if(response){
                dispatch(setTvShowDetails(response));
            }
        })
    }
};
export const getTvShowCredits = (tvshowId)=>{
    return (dispatch)=>{
        tvshowsAPI.queryTvShowCredits(tvshowId).then(response=>{
            if(response){
                dispatch(setTvShowCredits(response));
            }
        })
    }
};
export const getTvShowImages = (tvshowId)=>{
    return (dispatch)=>{
        tvshowsAPI.queryTvShowImages(tvshowId).then(response=>{
            if(response){
                dispatch(setTvShowImages(response));
            }
        })
    }
};

export default tvShowsReducer;