import React from "react";
import {connect} from "react-redux";
import {getMovieCredits, getMovieDetails} from "../../../../redux/moviesReducer";
import {withRouter} from "react-router-dom";
import MovieDetails from "./MovieDetails";

class MovieDetailsContainer extends React.Component{

    componentDidMount() {
        let movieId = this.props.match.params.movieId;
        this.props.getMovieDetails(movieId);
        this.props.getMovieCredits(movieId);
    }

    render() {
        if(!this.props.movieDetails || !this.props.movieCredits ){
            return(
                <div>
                    There is no info :c
                </div>
            )
        }
        return(
            <div>
                <MovieDetails {...this.props}/>
            </div>
        )
    }
};

let mapStateToProps = (state)=>{
    return {
        movieDetails: state.movies.movieDetails,
        movieCredits: state.movies.movieCredits
    }
};

export default connect(mapStateToProps, {getMovieDetails, getMovieCredits})(withRouter(MovieDetailsContainer));