import React, {useEffect, useRef, useState} from "react";
import style from "../Detailes.module.scss";
import {connect} from "react-redux";
import {rateMovie} from "../../../../../redux/moviesReducer";
import {compose} from "redux";
import rate from "../../../../../styles/svg/star-solid.svg";
import like from "../../../../../styles/svg/heart-solid.svg";
import mark from "../../../../../styles/svg/bookmark-solid.svg";
import watch from "../../../../../styles/svg/clipboard-list-solid.svg";
import ActionBarBtn from "./ActionBarBtn";
import {
    addToFavorites,
    addToWatchList, getCreatedLists,
    getUserFavoriteMovies,
    getUserMovieWatchlist,
    removeFromFavorites,
    removeFromWatchList
} from "../../../../../redux/accountReducer";
import ActionBarPlayListsBtn from "./ActionBarPlayListsBtn";

const MovieActionBar = (props) => {

    const [rating, changeRating] = useState(0.5);
    const [rateOpen, toggleRateOpen] = useState(false);
    const [inWatchlist, toggleInWatchlist] = useState(false);
    const [inFavorites, toggleInFavorites] = useState(false);

    const handleChangeRating = (event) => {
        changeRating(event.target.value);
    };

    const handleSubmitRating = (event) => {
        props.rateMovie(props.movieId, rating);
        alert('value is:' + rating);
        event.preventDefault();
    };


    const checkMovieInFavorites = () => {
        if (props.usersFavorites) {
            let res=false;
            props.usersFavorites.find(item => {
                if (item.id === props.movieId) {
                    res = true;
                }
            });
            return toggleInFavorites(res);
        }
    };

    const checkMovieInWatchList = () => {
        if (props.usersMovieWatchlist) {
            let res=false;
            props.usersMovieWatchlist.find(item => {
                if (item.id === props.movieId) {
                    res=true;
                }
            });
            return toggleInWatchlist(res);
        }
    };

    useEffect(() => {
        console.log('useEffect');
        props.getUserMovieWatchlist();
        props.getUserFavoriteMovies();
        props.getCreatedLists();
        return function (){ console.log('unmount')}
    }, [props.movieId, ]);

    useEffect(() => {
        checkMovieInFavorites();
    }, [props.usersFavorites, props.movieId]);

    useEffect(() => {
        checkMovieInWatchList();
    }, [props.usersMovieWatchlist, props.movieId]);


    const addFavorites = () => {
        props.addToFavorites(props.accountId, props.mediaType, props.movieId);
        toggleInFavorites(true);
    };
    const addWatchList = () => {
        props.addToWatchList(props.accountId, props.mediaType, props.movieId);
        toggleInWatchlist(true);
    };

    const removeFavorites = () => {
        props.removeFromFavorites(props.accountId, props.mediaType, props.movieId);
        toggleInFavorites(false);
    };
    const removeWatchList = () => {
        props.removeFromWatchList(props.accountId, props.mediaType, props.movieId);
        toggleInWatchlist(false);
    };
    console.log('rerender');
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

                <ActionBarPlayListsBtn imgPath={watch} userLists={props.userLists} movieId={props.movieId}
                                       title={"Playlists"}/>
            </div>
    )
};

let mapStateToProps = (state) => {
    return {
        accountId: state.account.currentUserAccountId,
        usersMovieWatchlist: state.account.userMovieWatchlist,
        usersFavorites: state.account.userFavoriteMovies,
        userLists: state.account.userLists,
    }
};


export default compose(connect(mapStateToProps, {
    rateMovie,
    addToWatchList,
    addToFavorites,
    removeFromWatchList,
    removeFromFavorites,
    getUserMovieWatchlist,
    getUserFavoriteMovies,
    getCreatedLists
}))(MovieActionBar);