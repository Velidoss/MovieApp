import {playlistsAPI} from "../DAL/api";

const SET_PLAYLIST_DETAILS = 'SET_PLAYLIST_DETAILS';
const SET_PLAYLISTS_DETAILS = 'SET_PLAYLISTS_DETAILS';

const initialState = {
    listDetails:null,
    playLists:[],
};

const playlistsReducer = (state=initialState, action)=>{
    switch (action.type) {
        case SET_PLAYLISTS_DETAILS:
            return  {...state, playLists:[...state.playLists, action.data]};
        case SET_PLAYLIST_DETAILS:
            return {...state, listDetails:action.data};
        default:
            return state;
    }
};

export const setPlaylistDetails = data=>({type:SET_PLAYLIST_DETAILS, data});
export const setPlaylistsDetails = data=>({type:SET_PLAYLISTS_DETAILS, data});

export const getPlaylistDetails =  (playlistId)=>{
    return async(dispatch)=>{
        let response= await playlistsAPI.queryPlaylistDetails(playlistId);
        dispatch(setPlaylistDetails(response));
    }
};

export const getPlaylistsDetails =  (playlistId)=>{
    return async(dispatch)=>{
        let response= await playlistsAPI.queryPlaylistDetails(playlistId);
        dispatch(setPlaylistsDetails(response));
    }
};

export default playlistsReducer;