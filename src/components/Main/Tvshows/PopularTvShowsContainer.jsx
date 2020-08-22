import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getPopularTvShows, getTopTvShows, getTvShowsGenres} from "../../../redux/tvShowsReducer";
import PopularTvShows from "./PopularTvShows";
import Pagination from "../../common/Pagination/Pagination";

const PopularTvShowsContainer =(props)=>{

    useEffect(()=> {
        props.getPopularTvShows(props.currentPage);
        props.getTvShowsGenres();
    }, []);

    const onPageChange=(page)=>{
        props.getPopularTvShows(page);
    };


    if (!props.popularTvShows ||
        !props.tvShowsGenres ||
        !props.currentPage ||
        !props.totalPages) {
        return (
            <div>
            </div>
        )
    }
    return (
        <div>
            <PopularTvShows {...props} />
            <Pagination
                totalPages={props.totalPages}
                currentPage={props.currentPage}
                onPageChange={onPageChange}
            />
        </div>
    )

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