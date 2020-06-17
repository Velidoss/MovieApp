import React from 'react';
import {getPopularMovies} from "../../../redux/moviesReducer";
import {connect} from "react-redux";
import Movies from "./Movies";
import style from './Movies.module.scss';

class MoviesContainer extends React.Component{


    componentDidMount=() =>{
        this.props.getPopularMovies();
    };


    render(){
        if(!this.props.popularMovies){
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
        popularMovies: state.movies.movies
    }
};

export default connect(mapStateToProps, {getPopularMovies})(MoviesContainer);