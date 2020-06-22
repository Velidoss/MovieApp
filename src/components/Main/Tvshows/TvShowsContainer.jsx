import React from "react";
import {connect} from "react-redux";
import {getPopularTvShows, getTopTvShows, getTvShowsGenres} from "../../../redux/tvShowsReducer";
import TvShows from "./TvShows";

class TvShowsContainer extends React.Component{

    componentDidMount = ()=> {
        this.props.getPopularTvShows();
        this.props.getTopTvShows();
        this.props.getTvShowsGenres();
    };

    render(){
        if(!this.props.popularTvShows || !this.props.topTvShows || !this.props.tvShowsGenres){
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
        topTvShows: state.tvShows.topTvShows,
        tvShowsGenres: state.tvShows.tvShowsGenres,
    }
};

export default connect(mapStateToProps,{getPopularTvShows, getTopTvShows, getTvShowsGenres})(TvShowsContainer);