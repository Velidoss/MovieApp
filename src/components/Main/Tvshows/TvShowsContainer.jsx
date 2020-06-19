import React from "react";
import {connect} from "react-redux";
import {getPopularTvShows, getTopTvShows} from "../../../redux/tvShowsReducer";
import TvShows from "./TvShows";

class TvShowsContainer extends React.Component{

    componentDidMount = ()=> {
        this.props.getPopularTvShows();
        this.props.getTopTvShows();
    };

    render(){
        if(!this.props.popularTvShows || !this.props.topTvShows){
            return (
                <div>
                </div>
            )
        }
        return (
            <div>
                <TvShows {...this.props} />
            </div>
        )
    }
};

let mapStateToProps =(state)=>{
    return {
        popularTvShows: state.tvShows.popularTvShows,
        topTvShows: state.tvShows.topTvShows
    }
};

export default connect(mapStateToProps,{getPopularTvShows, getTopTvShows})(TvShowsContainer);