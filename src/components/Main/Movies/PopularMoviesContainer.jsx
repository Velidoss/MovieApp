import React, {useEffect} from 'react';
import {getMovieGenres, getPopularMovies} from "../../../redux/moviesReducer";
import {connect} from "react-redux";
import PopularMovies from "./PopularMovies";
import style from './Movies.module.scss';
import Pagination from "../../common/Pagination/Pagination";

const PopularMoviesContainer =(props)=>{

    useEffect(()=>{
        props.getPopularMovies(props.currentPage);
        props.getMovieGenres();
    }, []);

    const onPageChange=(page)=>{
        props.getPopularMovies(page);
    };


    if(!props.popularMovies || !props.movieGenres || !props.currentPage || !props.totalPages){
        return (
            <div >
                <h2>Popular movies</h2>
            </div>
        )
    }
    return (
        <div className={style.container}>
            <PopularMovies {...props} />
            <Pagination
                totalPages={props.totalPages}
                currentPage={props.currentPage}
                onPageChange={onPageChange}
            />
        </div>
    )

};

let mapStateToProps = (state)=>{
    return {
        popularMovies: state.movies.movies,
        movieGenres: state.movies.movieGenres,
        totalPages: state.movies.totalPages,
        currentPage: state.movies.currentPage
    }
};

export default connect(mapStateToProps, {getPopularMovies, getMovieGenres})(PopularMoviesContainer);