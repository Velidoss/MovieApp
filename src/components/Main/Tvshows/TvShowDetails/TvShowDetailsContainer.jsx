import React, {useEffect} from "react";
import {connect} from "react-redux";
import TvShowDetails from "./TvShowDetails";
import {getTvShowCredits, getTvShowDetails, getTvShowImages} from "../../../../redux/tvShowsReducer";
import {withRouter} from "react-router-dom";
import Preloader from "../../../common/Preloader/Preloader";
import MovieDetails from "../../Movies/MovieDetails/MovieDetails";

const TvShowContainer = (props) => {

    useEffect(() => {
        let tvShowId = props.match.params.tvShowId;
        props.getTvShowDetails(tvShowId);
        props.getTvShowCredits(tvShowId);
        props.getTvShowImages(tvShowId);

    }, []);

    if (!props.tvShowDetails || !props.tvShowCredits || !props.tvShowImages) {
        return <Preloader/>

    }
    return (
        <div>
            <MovieDetails
                details={props.tvShowDetails}
                credits={props.tvShowCredits}
                images={props.tvShowImages}
                mediaType={"tv"}
            />
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        tvShowDetails: state.tvShows.tvShowDetails,
        tvShowCredits: state.tvShows.tvShowCredits,
        tvShowImages: state.tvShows.tvShowImages
    }
};


export default connect(mapStateToProps, {
    getTvShowDetails,
    getTvShowCredits,
    getTvShowImages
})(withRouter(TvShowContainer));