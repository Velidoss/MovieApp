import {actorsAPI} from "../DAL/api";

const GET_POPULAR_ACTORS = 'GET_POPULAR_ACTORS';
const GET_ACTOR_DETAILS = 'GET_ACTOR_DETAILS';

let initialState={
    popularActors:null,
    actorDetails:null,
};

const actorsReducer = (state=initialState, action)=>{
    switch (action.type) {
        case GET_POPULAR_ACTORS:
            return {...state, popularActors: action.data};
        case GET_ACTOR_DETAILS:
            return {...state, actorDetails: action.data};
        default:
            return state
    }
};

export const setPopularActorsList = (data) =>({type:GET_POPULAR_ACTORS, data});
export const setActorDetails = (data) =>({type:GET_ACTOR_DETAILS, data});

export const getPopularActors = ()=>{
    return (dispatch)=>{
        actorsAPI.queryPopularActors().then(response=>{
            dispatch(setPopularActorsList(response));
        })
    }
};
export const getActorDetails = (actorId)=>{
    return (dispatch)=>{
        actorsAPI.queryActorDetails(actorId).then(response=>{
            dispatch(setActorDetails(response));
        })
    }
};

export default actorsReducer;