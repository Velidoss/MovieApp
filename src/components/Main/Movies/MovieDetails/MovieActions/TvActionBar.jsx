import React, {useEffect, useState} from "react";
import style from "../Detailes.module.scss";
import {connect} from "react-redux";
import {compose} from "redux";
import rate from "../../../../../styles/svg/star-solid.svg";
import like from "../../../../../styles/svg/heart-solid.svg";
import mark from "../../../../../styles/svg/bookmark-solid.svg";
import ActionBarBtn from "./ActionBarBtn";
import {
    addToFavorites,
    addToWatchList,
    getCreatedLists,
    getUserFavoriteTvShows,
    getUserTvWatchlist,
    removeFromFavorites,
    removeFromWatchList
} from "../../../../../redux/accountReducer";
import {rateTv} from "../../../../../redux/tvShowsReducer";

const TvActionBar = (props) => {

    const [rating, changeRating] = useState(0.5);
    const [rateOpen, toggleRateOpen] = useState(false);
    const [inWatchlist, toggleInWatchlist] = useState(false);
    const [inFavorites, toggleInFavorites] = useState(false);

    const handleChangeRating = (event) => {
        changeRating(event.target.value);
    };

    const handleSubmitRating = (event) => {
        props.rateTv(props.tvshowId, rating);
        alert('value is:' + rating);
        event.preventDefault();
    };


    const checkTvInFavorites = () => {
        let res=false;
        if (props.usersFavorites) {
            props.usersFavorites.find(item => {
                if (item.id === props.tvshowId) {
                    res=true;
                }
            })
        }
        return toggleInFavorites(res);
    };

    const checkTvInWatchList = () => {
        let res=false;
        if (props.usersTvWatchlist) {
            props.usersTvWatchlist.find(item => {
                if (item.id === props.tvshowId) {
                    res = true;
                }
            });
        }
        return toggleInWatchlist(res);
    };

    useEffect(() => {
        props.getUserTvWatchlist();
        props.getUserFavoriteTvShows();
        props.getCreatedLists();
    }, [props.movieId]);

    useEffect(() => {
        checkTvInFavorites();
    }, [props.usersFavorites, props.movieId]);

    useEffect(() => {
        checkTvInWatchList();
    }, [props.usersTvWatchlist, props.movieId]);


    const addFavorites = () => {
        props.addToFavorites(props.accountId, props.mediaType, props.tvshowId);
        toggleInFavorites(true);
    };
    const addWatchList = () => {
        props.addToWatchList(props.accountId, props.mediaType, props.tvshowId);
        toggleInWatchlist(true);
    };

    const removeFavorites = () => {
        props.removeFromFavorites(props.accountId, props.mediaType, props.tvshowId);
        toggleInFavorites(false);
    };
    const removeWatchList = () => {
        props.removeFromWatchList(props.accountId, props.mediaType, props.tvshowId);
        toggleInWatchlist(false);
    };
    return (
        <div className={style.buttons}>
            <div className={style.action} onMouseLeave={() => toggleRateOpen(false)}>
                <button className={style.btn} onMouseOver={() => toggleRateOpen(true)}><img
                    className={style.icon} src={rate} alt=""/></button>
                {rateOpen
                    ? <form className={style.rate} onSubmit={handleSubmitRating}>
                        <input className={style.slider} type={'range'} onChange={handleChangeRating} value={rating}
                                step="0.5" min="0.5" max="10" >
                        </input>
                        <div className={style.rating_actions}>
                            <p className={style.value}>{rating}</p>
                            <button type={"submit"} className={style.value_submit_btn}> Submit rating</button>
                        </div>

                    </form>
                    : null
                }
            </div>

                {inFavorites
                    ? <ActionBarBtn added={inFavorites} callback={removeFavorites}
                                    title={"Remove from favorites"} imgPath={like}/>
                    : <ActionBarBtn added={inFavorites} callback={addFavorites}
                                    title={"Add to favorites"} imgPath={like}/>
                }

                {inWatchlist
                    ? <ActionBarBtn added={inWatchlist} callback={removeWatchList}
                                    title={"Remove from watchlist"} imgPath={mark}/>
                    : <ActionBarBtn added={inWatchlist} callback={addWatchList}
                                    title={"Add to watchlist"} imgPath={mark}/>
                }

                {/*<ActionBarPlayListsBtn imgPath={watch} userLists={props.userLists} movieId={props.tvshowId}*/}
                {/*                       title={"Playlists"}/>*/}
            </div>

    )
};

let mapStateToProps = (state) => {
    return {
        accountId: state.account.currentUserAccountId,
        usersTvWatchlist: state.account.userTvWatchlist,
        usersFavorites: state.account.userFavoriteTvShows,
        userLists: state.account.userLists,
    }
};


export default compose(connect(mapStateToProps, {
    rateTv,
    addToWatchList,
    addToFavorites,
    removeFromWatchList,
    removeFromFavorites,
    getUserTvWatchlist,
    getUserFavoriteTvShows,
    getCreatedLists
}))(TvActionBar);