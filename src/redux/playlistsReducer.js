import {playlistsAPI} from "../DAL/api";

const SET_PLAYLIST_DETAILS = 'SET_PLAYLIST_DETAILS';

const initialState = {
    listDetails:null,
};

const playlistsReducer = (state=initialState, action)=>{
    switch (action.type) {
        case SET_PLAYLIST_DETAILS:
            return {...state, listDetails:action.data};
        default:
            return state;
    }
};

export const setPlaylistDetails = data=>({type:SET_PLAYLIST_DETAILS, data});

export const getPlaylistDetails = (playlistId)=>{
    return (dispatch)=>{
        playlistsAPI.queryPlaylistDetails(playlistId).then(response=>{
            dispatch(setPlaylistDetails(response));
        })
    }
};

export default playlistsReducer;