import {actorsAPI} from "../DAL/api";

const GET_POPULAR_ACTORS = 'GET_POPULAR_ACTORS';
const GET_ACTOR_DETAILS = 'GET_ACTOR_DETAILS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState={
    popularActors:null,
    actorDetails:null,
    currentPage: 1,
    totalPages:null,

};

const actorsReducer = (state=initialState, action)=>{
    switch (action.type) {
        case GET_POPULAR_ACTORS:
            return {...state, popularActors: action.data.results, totalPages:action.data.total_pages};
        case GET_ACTOR_DETAILS:
            return {...state, actorDetails: action.data};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page};
        default:
            return state;
    }
};

export const setPopularActorsList = (data) =>({type:GET_POPULAR_ACTORS, data});
export const setActorDetails = (data) =>({type:GET_ACTOR_DETAILS, data});
export const setCurrentPage = (page)=>({type:SET_CURRENT_PAGE, page});

export const getPopularActors =  (page)=>{
    return async(dispatch)=>{
        let response = await actorsAPI.queryPopularActors(page);
        dispatch(setPopularActorsList(response));

    }
};
export const getActorDetails =  (actorId)=>{
    return async(dispatch)=>{
        let response = await actorsAPI.queryActorDetails(actorId);
        dispatch(setActorDetails(response));
    }
};

export default actorsReducer;