import React from "react";
import {connect} from "react-redux";
import {getUserRatedMovies, getUserRatedTv} from "../../../redux/accountReducer";
import {getMovieGenres} from "../../../redux/moviesReducer";
import Preloader from "../../common/Preloader/Preloader";
import Rated from "./Rated";

class RatedContainer extends React.Component{

    componentDidMount() {
        this.props.getUserRatedMovies();
        this.props.getUserRatedTv();
        this.props.getMovieGenres();
    }

    render() {
        if(!this.props.ratedMovies || !this.props.ratedTv || !this.props.genres){
            return <Preloader/>
        }
        return (
            <div>
                <Rated
                    ratedMovies={this.props.ratedMovies}
                    ratedTv={this.props.ratedTv}
                    genres={this.props.genres}
                />
            </div>
        )
    }
}

let mapStateToProps = (state)=>{
    return {
        ratedMovies: state.account.userRatedMovies,
        ratedTv: state.account.userRatedTv,
        genres: state.movies.movieGenres,
    }
};

export default connect(mapStateToProps,{getUserRatedMovies,getUserRatedTv, getMovieGenres })(RatedContainer);