import React from "react";
import {connect} from "react-redux";
import {getPopularTvShows, getTopTvShows, getTvShowsGenres} from "../../../redux/tvShowsReducer";
import PopularTvShows from "./PopularTvShows";
import Pagination from "../../common/Pagination";

class PopularTvShowsContainer extends React.Component{

    componentDidMount = ()=> {
        this.props.getPopularTvShows(this.props.currentPage);
        this.props.getTvShowsGenres();
    };
    onPageChange=(page)=>{
        this.props.getPopularTvShows(page);
    };

    render(){
        if(!this.props.popularTvShows ||
            !this.props.tvShowsGenres ||
            !this.props.currentPage ||
            !this.props.totalPages){
            return (
                <div>
                </div>
            )
        }
        return (
            <div>
                <PopularTvShows {...this.props} />
                <Pagination
                    totalPages={this.props.totalPages}
                    currentPage={this.props.currentPage}
                    onPageChange={this.onPageChange}
                />
            </div>
        )
    }
};

let mapStateToProps =(state)=>{
    return {
        popularTvShows: state.tvShows.popularTvShows,
        topTvShows: state.tvShows.topTvShows,
        tvShowsGenres: state.tvShows.tvShowsGenres,
        totalPages: state.tvShows.totalPages,
        currentPage: state.tvShows.currentPage
    }
};

export default connect(mapStateToProps,{getPopularTvShows, getTopTvShows, getTvShowsGenres})(PopularTvShowsContainer);