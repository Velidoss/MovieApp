import React from "react";
import {getTopTvShows, getTvShowsGenres} from "../../../redux/tvShowsReducer";
import {connect} from "react-redux";
import TopTvShows from "./TopTvShows";
import Pagination from "../../common/Pagination/Pagination";

class TopTvShowsContainer extends React.Component{

    componentDidMount = ()=> {
        this.props.getTopTvShows(this.props.currentPage);
        this.props.getTvShowsGenres();
    };
    onPageChange=(page)=>{
        this.props.getTopTvShows(page);
    };

    render(){
        if( !this.props.topTvShows || !this.props.tvShowsGenres || !this.props.currentPage || !this.props.totalPages){
            return (
                <div>Top tx shows</div>
            )
        }
        return (
            <div>
                <TopTvShows {...this.props}/>
                <Pagination
                    totalPages={this.props.totalPages}
                    currentPage={this.props.currentPage}
                    onPageChange={this.onPageChange}
                />
            </div>

        )
    }
}

let mapStateToProps = (state)=>{
    return {
        topTvShows: state.tvShows.topTvShows,
        tvShowsGenres: state.tvShows.tvShowsGenres,
        totalPages: state.tvShows.totalPages,
        currentPage: state.tvShows.currentPage
    }
};

export default connect(mapStateToProps, {getTopTvShows, getTvShowsGenres})(TopTvShowsContainer);