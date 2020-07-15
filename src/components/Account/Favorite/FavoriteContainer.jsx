import React from "react";
import Favorite from "./Favorite";
import {connect} from "react-redux";
import {getUserFavoriteMovies, getUserFavoriteTvShows} from "../../../redux/accountReducer";
import {getMovieGenres} from "../../../redux/moviesReducer";
import Preloader from "../../common/Preloader";

class FavoriteContainer extends React.Component{

    componentDidMount() {
        this.props.getUserFavoriteMovies();
        this.props.getUserFavoriteTvShows();
        this.props.getMovieGenres();
    }

    render(){
        if(!this.props.favoriteMovies || !this.props.favoriteTvShows || !this.props.genres){
            return (
                <Preloader/>
            )
        }
        return(
            <Favorite
                favoriteMovies={this.props.favoriteMovies}
                favoriteTvShows={this.props.favoriteTvShows}
                genres = {this.props.genres} />
        )
    }
}

let mapStateToProps = (state)=>{
    return {
        favoriteMovies: state.account.userFavoriteMovies,
        favoriteTvShows:state.account.userFavoriteTvShows,
        genres: state.movies.movieGenres,
    }
};

export default connect(mapStateToProps, {
    getUserFavoriteMovies,
    getUserFavoriteTvShows,
    getMovieGenres,})(FavoriteContainer);