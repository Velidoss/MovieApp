import React, {useEffect} from "react";
import Favorite from "./Favorite";
import {connect} from "react-redux";
import {getUserFavoriteMovies, getUserFavoriteTvShows} from "../../../redux/accountReducer";
import {getMovieGenres} from "../../../redux/moviesReducer";
import Preloader from "../../common/Preloader/Preloader";
import {getTvShowsGenres} from "../../../redux/tvShowsReducer";

const FavoriteContainer = (props) => {

    useEffect(() => {
        props.getUserFavoriteMovies();
        props.getUserFavoriteTvShows();
        props.getMovieGenres();
        props.getTvShowsGenres();
    }, []);


    if (!props.favoriteMovies || !props.favoriteTvShows || !props.movieGenres || !props.tvGenres) {
        return (
            <Preloader/>
        )
    }
    return (
        <Favorite
            favoriteMovies={props.favoriteMovies}
            favoriteTvShows={props.favoriteTvShows}
            movieGenres={props.movieGenres}
            tvGenres={props.tvGenres}
        />
    )
};

let mapStateToProps = (state) => {
    return {
        favoriteMovies: state.account.userFavoriteMovies,
        favoriteTvShows: state.account.userFavoriteTvShows,
        movieGenres: state.movies.movieGenres,
        tvGenres: state.tvShows.tvShowsGenres
    }
};

export default connect(mapStateToProps, {
    getUserFavoriteMovies,
    getUserFavoriteTvShows,
    getMovieGenres,
    getTvShowsGenres
})(FavoriteContainer);