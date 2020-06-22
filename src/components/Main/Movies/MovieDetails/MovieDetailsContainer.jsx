import React from "react";
import {connect} from "react-redux";
import {getMovieCredits, getMovieDetails, getMovieImages} from "../../../../redux/moviesReducer";
import {withRouter} from "react-router-dom";
import MovieDetails from "./MovieDetails";

class MovieDetailsContainer extends React.Component{

    componentDidMount() {
        let movieId = this.props.match.params.movieId;
        this.props.getMovieDetails(movieId);
        this.props.getMovieCredits(movieId);
        this.props.getMovieImages(movieId);
    }

    render() {
        if(!this.props.movieDetails || !this.props.movieCredits || !this.props.movieImages ){
            return(
                <div>
                    There is no info :c
                </div>
            )
        }
        return(
            <div>
                <MovieDetails {...this.props}
                />
            </div>
        )
    }
};

let mapStateToProps = (state)=>{
    return {
        movieDetails: state.movies.movieDetails,
        movieCredits: state.movies.movieCredits,
        movieImages: state.movies.movieImages,
    }
};

export default connect(mapStateToProps, {getMovieDetails, getMovieCredits, getMovieImages})(withRouter(MovieDetailsContainer));