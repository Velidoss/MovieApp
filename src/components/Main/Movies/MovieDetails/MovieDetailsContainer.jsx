import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getMovieCredits, getMovieDetails, getMovieImages} from "../../../../redux/moviesReducer";
import {withRouter} from "react-router-dom";
import MovieDetails from "./MovieDetails";
import Preloader from "../../../common/Preloader/Preloader";


const MovieDetailsContainer = (props) => {

    const [openVideo, toggleOpenVideo] = useState(false);

    useEffect(() => {
        let movieId = props.match.params.movieId;
        props.getMovieDetails(movieId);
        props.getMovieCredits(movieId);
        props.getMovieImages(movieId);
    }, []);

    const open = () => {
        toggleOpenVideo({openVideo: true})
    };

    const close = () => {
        toggleOpenVideo({openVideo: false})
    };


    if (!props.movieDetails || !props.movieCredits || !props.movieImages) {
        return (
            <div>
                <Preloader/>
            </div>
        )
    }
    return (
        <div>
            <MovieDetails {...props}
                          openModal={openVideo}
                          openVideo={open}
                          closeVideo={close}
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