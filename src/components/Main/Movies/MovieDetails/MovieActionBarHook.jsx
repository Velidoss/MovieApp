import React, {useState} from "react";
import style from "./Detailes.module.scss";
import {connect} from "react-redux";
import {rateMovie} from "../../../../redux/moviesReducer";
import {compose} from "redux";
import rate from "../../../../styles/svg/star-solid.svg";
import like from "../../../../styles/svg/heart-solid.svg";
import mark from "../../../../styles/svg/bookmark-solid.svg";
import watch from "../../../../styles/svg/clipboard-list-solid.svg";
import {addToFavorites, addToWatchList} from "../../../../redux/accountReducer";

const MovieActionBarHook =(props)=>{

    //хук состояния
    const [rateOpen, setRateOpen] = useState(false);
    const [likeOpen, setLikeOpen] = useState(false);
    const [markOpen, setMarkOpen] = useState(false);
    const [watchOpen, setWatchOpen] = useState(false);
    
    const addWatchList = ()=>{
        props.addToWatchList(props.accountId, props.mediaType, props.movieId);
    };
    const addFavorites = () =>{
        props.addToFavorites(props.accountId, props.mediaType, props.movieId);
    };
    
    return (
        <div className={style.buttons}>
            <div className={style.action} onMouseLeave={()=>setRateOpen(false)}>
                <button className={style.btn} onMouseOver={()=>setRateOpen(true)}> <img className={style.icon} src={rate} alt=""/></button>
                {rateOpen
                    ? <div className={style.rate}>
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
            <div  className={style.action} onMouseLeave={()=>setLikeOpen(false)}>
                <button className={style.btn} onMouseOver={()=>setLikeOpen(true)}><img className={style.icon} src={like}  alt=""/></button>
                {likeOpen 
                    ? <div className={style.popup}>
                        <button onClick={()=>addFavorites()}  className={style.popup_text}>Like movie</button>
                    </div>
                    : null}

            </div>
            <div className={style.action} onMouseLeave={()=>setMarkOpen(false)}>
                <button className={style.btn} onMouseOver={()=>setMarkOpen(true)}><img className={style.icon} src={mark} alt=""/></button>
                {markOpen 
                ? <div className={style.popup}>
                        <button  className={style.popup_text} onClick={()=>addWatchList()}>Add to watchlist</button>
                    </div>
                : null}

            </div>
            <div className={style.action} onMouseLeave={()=>setWatchOpen(false)}>
                <button className={style.btn} onMouseOver={()=>setWatchOpen(true)}><img className={style.icon} src={watch} alt=""/></button>
                {watchOpen 
                    ? <div className={style.popup}>
                        <p className={style.popup_text}>Add to playlist</p>
                    </div>
                    : null}

            </div>

            <ul className={style.rating_number}>

            </ul>
        </div>
        )
};

let mapStateToProps = (state)=>{
    return {
        accountId: state.account.currentUserAccountId,
    }
};


export default connect(mapStateToProps, {addToWatchList,addToFavorites})(MovieActionBarHook);