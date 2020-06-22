import React from "react";
import {connect} from "react-redux";
import TvShowDetails from "./TvShowDetails";
import {getTvShowCredits, getTvShowDetails, getTvShowImages} from "../../../../redux/tvShowsReducer";
import {withRouter} from "react-router-dom";

class TvShowContainer extends React.Component{

    componentDidMount() {
        let tvShowId = this.props.match.params.tvShowId;
        this.props.getTvShowDetails(tvShowId);
        this.props.getTvShowCredits(tvShowId);
        this.props.getTvShowImages(tvShowId);
    }

    render(){
        if(!this.props.tvShowDetails || !this.props.tvShowCredits || !this.props.tvShowImages){
            return(
                <div>

                </div>
            )
        }
        return (
            <div>
                <TvShowDetails {...this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state) =>{
    return {
        tvShowDetails: state.tvShows.tvShowDetails,
        tvShowCredits: state.tvShows.tvShowCredits,
        tvShowImages: state.tvShows.tvShowImages
    }
};


export default connect(mapStateToProps, {getTvShowDetails, getTvShowCredits, getTvShowImages})(withRouter(TvShowContainer));