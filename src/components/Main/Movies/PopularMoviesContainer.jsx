import React from 'react';
import {getMovieGenres, getPopularMovies} from "../../../redux/moviesReducer";
import {connect} from "react-redux";
import PopularMovies from "./PopularMovies";
import style from './Movies.module.scss';
import Pagination from "../../common/Pagination/Pagination";

class PopularMoviesContainer extends React.Component{

    componentDidMount=() =>{
        this.props.getPopularMovies(this.props.currentPage);
        this.props.getMovieGenres();
    };

    onPageChange=(page)=>{
        this.props.getPopularMovies(page);
    };

    render(){
        if(!this.props.popularMovies || !this.props.movieGenres || !this.props.currentPage || !this.props.totalPages){
            return (
                <div >
                    <h2>Popular movies</h2>
                </div>
            )
        }
        return (
            <div className={style.container}>
                <PopularMovies {...this.props} />
                <Pagination
                    totalPages={this.props.totalPages}
                    currentPage={this.props.currentPage}
                    onPageChange={this.onPageChange}
                />
            </div>
        )
    }
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