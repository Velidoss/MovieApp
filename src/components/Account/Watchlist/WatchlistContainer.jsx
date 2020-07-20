import React from "react";
import {connect} from "react-redux";
import {getUserMovieWatchlist, getUserTvWatchlist} from "../../../redux/accountReducer";
import Preloader from "../../common/Preloader/Preloader";
import Watchlist from "./Watchlist";
import {getMovieGenres} from "../../../redux/moviesReducer";

class WatchlistContainer extends React.Component{
    componentDidMount() {
        this.props.getUserMovieWatchlist();
        this.props.getUserTvWatchlist();
        this.props.getMovieGenres();
    }

    render() {
        if(!this.props.movieWatchlist || !this.props.tvWatchlist || !this.props.genres){
            return (
                <div>
                    <Preloader/>
                </div>
            )
        }
        return (
            <div>
                <Watchlist
                    movieWatchlist={this.props.movieWatchlist}
                    tvWatchlist={this.props.tvWatchlist}
                    genres={this.props.genres}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) =>{
    return {
        movieWatchlist: state.account.userMovieWatchlist,
        tvWatchlist: state.account.userTvWatchlist,
        genres: state.movies.movieGenres,
    }
};

export default connect(mapStateToProps, {getUserMovieWatchlist, getUserTvWatchlist,getMovieGenres})(WatchlistContainer);