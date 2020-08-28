import React, {useEffect, useMemo, useState} from "react";
import {connect} from "react-redux";
import {getMovieCredits, getMovieDetails, getMovieImages} from "../../../../redux/moviesReducer";
import {withRouter} from "react-router-dom";
import MovieDetails from "./MovieDetails";
import Preloader from "../../../common/Preloader/Preloader";


const MovieDetailsContainer = (props) => {

    useEffect(() => {
        let movieId = props.match.params.movieId;
        props.getMovieDetails(movieId);
        props.getMovieCredits(movieId);
        props.getMovieImages(movieId);
    }, [props.match.params.movieId]);



    if (!props.movieDetails || !props.movieCredits || !props.movieImages) {
        return (
            <div>
                <Preloader/>
            </div>
        )
    }

    return (

        <div>
            <MovieDetails
                details={props.movieDetails}
                credits={props.movieCredits}
                images={props.movieImages}
                mediaType={"movie"}
            />
        </div>
    )

};

let mapStateToProps = (state) => {
    return {
        movieDetails: state.movies.movieDetails,
        movieCredits: state.movies.movieCredits,
        movieImages: state.movies.movieImages,
    }
};

export default connect(mapStateToProps, {
    getMovieDetails,
    getMovieCredits,
    getMovieImages
})(withRouter(MovieDetailsContainer));