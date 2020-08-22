import React, {useEffect} from "react";
import style from "./Movies.module.scss";
import NowPlayingMovies from "./NowPlayingMovies";
import {connect} from "react-redux";
import {getMovieGenres, getNowPlayingMovies} from "../../../redux/moviesReducer";
import Pagination from "../../common/Pagination/Pagination";
import Preloader from "../../common/Preloader/Preloader";

const NowPlayingMoviesContainer=(props)=> {

    useEffect(() =>{
        props.getNowPlayingMovies(props.currentPage);
        props.getMovieGenres()
        }, []
    );


    const onPageChange=(page)=>{
        props.getNowPlayingMovies(page);
    };

    if (!props.nowPlayingMovies || !props.movieGenres || !props.currentPage || !props.totalPages) {
        return (
            <div>
                <Preloader/>
            </div>
        )
    }
    return (
        <div>
            <div className={style.container}>
                <NowPlayingMovies {...props} />
                <Pagination
                    totalPages={props.totalPages}
                    currentPage={props.currentPage}
                    onPageChange={onPageChange}
                />
            </div>
        </div>
    )
};

let mapStateToProps = (state) =>{
    return {
        nowPlayingMovies: state.movies.nowPlayingMovies,
        movieGenres: state.movies.movieGenres,
        totalPages: state.movies.totalPages,
        currentPage: state.movies.currentPage
    }
};

export default connect(mapStateToProps, { getNowPlayingMovies , getMovieGenres})(NowPlayingMoviesContainer);