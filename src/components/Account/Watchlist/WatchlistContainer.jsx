import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getUserMovieWatchlist, getUserTvWatchlist} from "../../../redux/accountReducer";
import Preloader from "../../common/Preloader/Preloader";
import Watchlist from "./Watchlist";
import {getMovieGenres} from "../../../redux/moviesReducer";
import {getTvShowsGenres} from "../../../redux/tvShowsReducer";

const WatchlistContainer = (props) => {
    useEffect(() => {
        props.getUserMovieWatchlist();
        props.getUserTvWatchlist();
        props.getMovieGenres();
        props.getTvShowsGenres();
    }, []);


    if (!props.movieWatchlist || !props.tvWatchlist || !props.movieGenres || !props.tvGenres) {
        return (
            <div>
                <Preloader/>
            </div>
        )
    }
    return (
        <div>
            <Watchlist
                movieWatchlist={props.movieWatchlist}
                tvWatchlist={props.tvWatchlist}
                movieGenres={props.movieGenres}
                tvGenres={props.tvGenres}
            />
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        movieWatchlist: state.account.userMovieWatchlist,
        tvWatchlist: state.account.userTvWatchlist,
        movieGenres: state.movies.movieGenres,
        tvGenres: state.tvShows.tvShowsGenres
    }
};

export default connect(mapStateToProps, {
    getUserMovieWatchlist,
    getUserTvWatchlist,
    getMovieGenres,
    getTvShowsGenres
})(WatchlistContainer);