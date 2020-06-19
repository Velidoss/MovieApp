import React from 'react';
import {getMovieGenres, getNowPlayingMovies, getPopularMovies} from "../../../redux/moviesReducer";
import {connect} from "react-redux";
import Movies from "./Movies";
import style from './Movies.module.scss';

class MoviesContainer extends React.Component{


    componentDidMount=() =>{
        this.props.getPopularMovies();
        this.props.getNowPlayingMovies();
        this.props.getMovieGenres();
    };


    render(){
        if(!this.props.nowPlayingMovies || !this.props.popularMovies || !this.props.movieGenres){
            return (
                <div >
                    <h2>Popular movies</h2>
                </div>
            )
        }
        return (
            <div className={style.container}>
                <Movies {...this.props} />
            </div>
        )
    }
};

let mapStateToProps = (state)=>{
    return {
        popularMovies: state.movies.movies,
        nowPlayingMovies: state.movies.nowPlayingMovies,
        movieGenres: state.movies.movieGenres
    }
};

export default connect(mapStateToProps, {getPopularMovies, getNowPlayingMovies, getMovieGenres})(MoviesContainer);