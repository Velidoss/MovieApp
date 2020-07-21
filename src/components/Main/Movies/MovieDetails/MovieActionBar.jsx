import React from "react";
import style from "./Detailes.module.scss";
import {connect} from "react-redux";
import {rateMovie} from "../../../../redux/moviesReducer";
import {compose} from "redux";
import rate from "../../../../styles/svg/star-solid.svg";
import like from "../../../../styles/svg/heart-solid.svg";
import mark from "../../../../styles/svg/bookmark-solid.svg";
import watch from "../../../../styles/svg/clipboard-list-solid.svg";

class MovieActionBar extends React.Component{

    constructor(props){
        super(props);
        this.state={
            rateOpen: false
        }
    }

    openRate=  ()=>{
        this.setState({rateOpen:true});
    };

    closeRate=  ()=>{
        this.setState({rateOpen:false});
    };

    rateMovie = ()=>{
        this.props.rateMovie(this.props.movieId, this.props.guestSessionId, 8);
        alert('Movie rated');
    };

    render() {
    return (
        <div className={style.buttons}>
            <div onMouseLeave={this.closeRate}>
                <button className={style.btn} onClick={this.openRate}> <img className={style.icon} src={rate} alt=""/></button>
                {this.state.rateOpen
                    ? <div className={style.rate}>
                        {/*<img className={style.star} src={rate} alt=""/>*/}
                        {/*<img className={style.star} src={rate} alt=""/>*/}
                        {/*<img className={style.star} src={rate} alt=""/>*/}
                        {/*<img className={style.star} src={rate} alt=""/>*/}
                        {/*<img className={style.star} src={rate} alt=""/>*/}
                        <input className={style.range} type="range" list={"rating"} min="0" max="10" step="1"/>
                        <datalist id="rating" className={style.hashmarks}>
                            <option value="0" label={"0"}/>
                            <option value="2" label={"2"}/>
                            <option value="4" label={"4"}/>
                            <option value="6" label={"6"}/>
                            <option value="8" label={"8"}/>
                            <option value="10" label={"10"}/>
                        </datalist>
                    </div>
                    : null
                }

            </div>

            <button className={style.btn} ><img className={style.icon} src={like}  alt=""/></button>
            <button className={style.btn} ><img className={style.icon} src={mark} alt=""/></button>
            <button className={style.btn} ><img className={style.icon} src={watch} alt=""/></button>
            <ul className={style.rating_number}>

            </ul>
        </div>
        )
    }
}

let mapStateToProps = (state)=>{
    return null
};


export default compose(connect(mapStateToProps, {rateMovie}) )(MovieActionBar);