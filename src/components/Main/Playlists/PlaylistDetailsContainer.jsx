import React from "react";
import {connect} from "react-redux";
import {getPlaylistDetails} from "../../../redux/playlistsReducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Preloader from "../../common/Preloader";
import Movie from "../Movies/Movie";
import {getMovieGenres} from "../../../redux/moviesReducer";
import PopularMovies from "../Movies/PopularMovies";
import Pagination from "../../common/Pagination/Pagination";

class PlaylistDetailsContainer extends React.Component{

    componentDidMount() {
        let playListId = this.props.match.params.listId;
        this.props.getPlaylistDetails(playListId);
        this.props.getMovieGenres();
    }

    render(){
        if(!this.props.playlist || !this.props.movieGenres){
            return (
                <Preloader/>
            )
        }
        return (
            <PopularMovies
                popularMovies={this.props.playlist.items}
                movieGenres={this.props.movieGenres}
            />
        )
    }
}

let mapStateToProps = (state)=>{
    return {
        playlist: state.playlists.listDetails,
        movieGenres: state.movies.movieGenres,
    }
};

export default compose( connect(mapStateToProps, {getPlaylistDetails, getMovieGenres}), withRouter) (PlaylistDetailsContainer)