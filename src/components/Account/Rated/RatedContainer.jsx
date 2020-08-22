import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getUserRatedMovies, getUserRatedTv} from "../../../redux/accountReducer";
import {getMovieGenres} from "../../../redux/moviesReducer";
import Preloader from "../../common/Preloader/Preloader";
import Rated from "./Rated";

const RatedContainer = (props) => {

    useEffect(() => {
        props.getUserRatedMovies();
        props.getUserRatedTv();
        props.getMovieGenres();
    }, []);


    if (!props.ratedMovies || !props.ratedTv || !props.genres) {
        return <Preloader/>
    }
    return (
        <div>
            <Rated
                ratedMovies={props.ratedMovies}
                ratedTv={props.ratedTv}
                genres={props.genres}
            />
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        ratedMovies: state.account.userRatedMovies,
        ratedTv: state.account.userRatedTv,
        genres: state.movies.movieGenres,
    }
};

export default connect(mapStateToProps, {getUserRatedMovies, getUserRatedTv, getMovieGenres})(RatedContainer);