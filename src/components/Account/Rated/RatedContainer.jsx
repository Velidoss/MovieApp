import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getUserRatedMovies, getUserRatedTv} from "../../../redux/accountReducer";
import {getMovieGenres} from "../../../redux/moviesReducer";
import Preloader from "../../common/Preloader/Preloader";
import Rated from "./Rated";
import Favorite from "../Favorite/Favorite";
import {getTvShowsGenres} from "../../../redux/tvShowsReducer";

const RatedContainer = (props) => {

    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        props.getUserRatedMovies();
        props.getUserRatedTv();
        props.getMovieGenres();
        props.getTvShowsGenres();
    }, []);


    if (!props.ratedMovies || !props.ratedTv || !props.movieGenres || !props.tvGenres) {
        return <Preloader/>
    }
    return (
        <div>
            <Rated
                ratedMovies={props.ratedMovies}
                ratedTv={props.ratedTv}
                movieGenres={props.movieGenres}
                tvGenres={props.tvGenres}
            />
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        ratedMovies: state.account.userRatedMovies,
        ratedTv: state.account.userRatedTv,
        movieGenres: state.movies.movieGenres,
        tvGenres: state.tvShows.tvShowsGenres
    }
};

export default connect(mapStateToProps, {getUserRatedMovies, getUserRatedTv, getMovieGenres,getTvShowsGenres})(RatedContainer);