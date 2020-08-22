import React, {useEffect} from "react";
import Favorite from "./Favorite";
import {connect} from "react-redux";
import {getUserFavoriteMovies, getUserFavoriteTvShows} from "../../../redux/accountReducer";
import {getMovieGenres} from "../../../redux/moviesReducer";
import Preloader from "../../common/Preloader/Preloader";

const FavoriteContainer = (props) => {

    useEffect(() => {
        props.getUserFavoriteMovies();
        props.getUserFavoriteTvShows();
        props.getMovieGenres();
    }, []);


    if (!props.favoriteMovies || !props.favoriteTvShows || !props.genres) {
        return (
            <Preloader/>
        )
    }
    return (
        <Favorite
            favoriteMovies={props.favoriteMovies}
            favoriteTvShows={props.favoriteTvShows}
            genres={props.genres}/>
    )
};

let mapStateToProps = (state) => {
    return {
        favoriteMovies: state.account.userFavoriteMovies,
        favoriteTvShows: state.account.userFavoriteTvShows,
        genres: state.movies.movieGenres,
    }
};

export default connect(mapStateToProps, {
    getUserFavoriteMovies,
    getUserFavoriteTvShows,
    getMovieGenres,
})(FavoriteContainer);