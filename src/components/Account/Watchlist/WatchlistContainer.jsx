import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getUserMovieWatchlist, getUserTvWatchlist} from "../../../redux/accountReducer";
import Preloader from "../../common/Preloader/Preloader";
import Watchlist from "./Watchlist";
import {getMovieGenres} from "../../../redux/moviesReducer";

const WatchlistContainer = (props) => {
    useEffect(() => {
        props.getUserMovieWatchlist();
        props.getUserTvWatchlist();
        props.getMovieGenres();
    }, []);


    if (!props.movieWatchlist || !props.tvWatchlist || !props.genres) {
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
                genres={props.genres}
            />
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        movieWatchlist: state.account.userMovieWatchlist,
        tvWatchlist: state.account.userTvWatchlist,
        genres: state.movies.movieGenres,
    }
};

export default connect(mapStateToProps, {
    getUserMovieWatchlist,
    getUserTvWatchlist,
    getMovieGenres
})(WatchlistContainer);