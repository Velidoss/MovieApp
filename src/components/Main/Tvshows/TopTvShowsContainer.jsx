import React, {useEffect} from "react";
import {getTopTvShows, getTvShowsGenres} from "../../../redux/tvShowsReducer";
import {connect} from "react-redux";
import TopTvShows from "./TopTvShows";
import Pagination from "../../common/Pagination/Pagination";
import Preloader from "../../common/Preloader/Preloader";

const TopTvShowsContainer =(props)=>{

    useEffect(()=> {
        props.getTopTvShows(props.currentPage);
        props.getTvShowsGenres();
    }, [props.currentPage]);

    const onPageChange=(page)=>{
        props.getTopTvShows(page);
    };


    if( !props.topTvShows || !props.tvShowsGenres || !props.currentPage || !props.totalPages){
        return <Preloader/>
    }
    return (
        <div>
            <TopTvShows {...props}/>
            <Pagination
                totalPages={props.totalPages}
                currentPage={props.currentPage}
                onPageChange={onPageChange}
            />
        </div>
    )
};

let mapStateToProps = (state)=>{
    return {
        topTvShows: state.tvShows.topTvShows,
        tvShowsGenres: state.tvShows.tvShowsGenres,
        totalPages: state.tvShows.totalPages,
        currentPage: state.tvShows.currentPage
    }
};

export default connect(mapStateToProps, {getTopTvShows, getTvShowsGenres})(TopTvShowsContainer);