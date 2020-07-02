import React from "react";
import style from "./Movies.module.scss";
import NowPlayingMovies from "./NowPlayingMovies";
import {connect} from "react-redux";
import {getMovieGenres, getNowPlayingMovies} from "../../../redux/moviesReducer";
import Pagination from "../../common/Pagination";

class NowPlayingMoviesContainer extends React.Component {

    componentDidMount=() =>{
        this.props.getNowPlayingMovies(this.props.currentPage);
        this.props.getMovieGenres();
    };

    onPageChange=(page)=>{
        this.props.getNowPlayingMovies(page);
    };

    render() {
        if (!this.props.nowPlayingMovies || !this.props.movieGenres || !this.props.currentPage || !this.props.totalPages) {
            return (
                <div>
                    here is a now playing movies
                </div>
            )
        }
        return (
            <div>
                <div className={style.container}>
                    <NowPlayingMovies {...this.props} />
                    <Pagination
                        totalPages={this.props.totalPages}
                        currentPage={this.props.currentPage}
                        onPageChange={this.onPageChange}
                    />
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) =>{
    return {
        nowPlayingMovies: state.movies.nowPlayingMovies,
        movieGenres: state.movies.movieGenres,
        totalPages: state.movies.totalPages,
        currentPage: state.movies.currentPage
    }
};

export default connect(mapStateToProps, { getNowPlayingMovies , getMovieGenres})(NowPlayingMoviesContainer);