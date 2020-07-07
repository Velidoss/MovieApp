import React from "react";
import style from "./Detailes.module.scss";
import {connect} from "react-redux";
import {rateMovie} from "../../../../redux/moviesReducer";
import Auth from "../../../Auth";
import {compose} from "redux";

class RateMovie extends React.Component{

    rateMovie = ()=>{
        this.props.rateMovie(this.props.movieId, this.props.guestSessionId, 8);
        alert('Movie rated');
    };

    render() {
    return (
        <div>
            <button className={style.rate} onClick={this.rateMovie}>Rate movie</button>
            <ul className={style.rating_number}>

            </ul>
        </div>
        )
    }
}

let mapStateToProps = (state)=>{
    return null
};


export default compose(connect(mapStateToProps, {rateMovie}), Auth )(RateMovie);