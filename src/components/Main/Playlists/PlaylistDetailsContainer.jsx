import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getPlaylistDetails} from "../../../redux/playlistsReducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";
import {getMovieGenres} from "../../../redux/moviesReducer";
import PlayListDetails from "./PlayListDetails/PlayListDetails";

const PlaylistDetailsContainer =(props)=>{

    useEffect(()=>{
        let playListId = props.match.params.listId;
        props.getPlaylistDetails(playListId);
        props.getMovieGenres();
    }, [props.match.params.listId]);


    if(!props.playlist || !props.movieGenres){
        return (
            <Preloader/>
        )
    }
    return (
        <PlayListDetails
            popularMovies={props.playlist.items}
            movieGenres={props.movieGenres}
            title = {props.playlist.name}
            listId={props.playlist.id}
        />
    )

};

let mapStateToProps = (state)=>{
    return {
        playlist: state.playlists.listDetails,
        movieGenres: state.movies.movieGenres,
    }
};

export default compose( connect(mapStateToProps, {getPlaylistDetails, getMovieGenres}), withRouter) (PlaylistDetailsContainer)