import React, {PureComponent, useEffect, useState} from "react";
import style from "./Link.module.scss";
import {connect} from "react-redux";
import {addToPlayList,removeFromPlayList} from "../../../../../redux/moviesReducer";
import {getPlaylistsDetails} from "../../../../../redux/playlistsReducer";

const List =(props)=>{

    const [containsMovie, toggleContainsMovie] = useState(false);
    const [playListDetails, togglePlayListDetails] = useState([]);

    const setPlayList = ()=>{
        if(props.playlist.length > 0){
            props.playlist.forEach(list=>{
                if(list.id === props.id.toString()){
                    togglePlayListDetails(list.items);
                }
            })
        }
    };

    useEffect(()=>{
        props.getPlaylistsDetails(props.id);
    }, []);

    useEffect(()=>{
        setPlayList();
        checkMovieInList();
    }, [props.playlist]);


    const addPlayList=(playlistId)=>{
        props.addToPlayList(playlistId, props.movieId);
        toggleContainsMovie(true);
    };
    const removePlayList=(playlistId)=>{
        props.removeFromPlayList(playlistId, props.movieId);
        toggleContainsMovie(false);
    };
    const checkMovieInList=()=>{
        if(playListDetails.length > 0){
            playListDetails.find(item=>{
                if(item.id === props.movieId){
                    toggleContainsMovie(true);
                }
            })
        }
    };

    if(props.playlist.length > 0){
        return (
            <div className={style.list_name}>
                {props.name}
                {containsMovie
                    ? <button className={style.list_btn} onClick={()=>{removePlayList(props.id)}}>-</button>
                    : <button className={style.list_btn} onClick={()=>{addPlayList(props.id)}}>+</button>
                }
            </div>
        )
    }
    return null;
};

let mapStateToProps = (state)=>{
    return {
        playlist: state.playlists.playLists,
    }
};


export default connect(mapStateToProps,{addToPlayList, removeFromPlayList, getPlaylistsDetails})(List);