import React, {useEffect, useState} from "react";
import style from "./Detailes.module.scss";
import {connect} from "react-redux";
import {rateMovie} from "../../../../redux/moviesReducer";
import {compose} from "redux";
import rate from "../../../../styles/svg/star-solid.svg";
import like from "../../../../styles/svg/heart-solid.svg";
import mark from "../../../../styles/svg/bookmark-solid.svg";
import watch from "../../../../styles/svg/clipboard-list-solid.svg";
import ActionBarBtn from "./MovieActions/ActionBarBtn";
import {
    addToFavorites,
    addToWatchList,
    getUserFavoriteMovies,
    getUserMovieWatchlist,
    removeFromFavorites,
    removeFromWatchList
} from "../../../../redux/accountReducer";
import ActionBarPlayListsBtn from "./MovieActions/ActionBarPlayListsBtn";

const MovieActionBar = (props) => {

    const [rating, changeRating] = useState(0);
    const [rateOpen, toggleRateOpen] = useState(false);
    const [inWatchlist, toggleInWatchlist] = useState(false);
    const [inFavorites, toggleInFavorites] = useState(false);

    const handleChangeRating = (event) => {
        changeRating(event.target.value);
    };

    const handleSubmitRating = (event) => {
        props.rateMovie(props.movieId, props.guestSessionId, rating);
        alert('value is:' + rating);
        event.preventDefault();
    };

    const rateMovie = (rating) => {
        props.rateMovie(props.movieId, props.guestSessionId, rating);
        alert('Movie rated');
    };

    const checkMovieInFavorites = () => {
        if (props.usersFavorites) {
            props.usersFavorites.find(item => {
                if (item.id === props.movieId) {
                    return toggleInFavorites(true);
                }
            })
        }

    };
    const checkMovieInWatchList = () => {
        if (props.usersMovieWatchlist) {
            props.usersMovieWatchlist.find(item => {
                if (item.id === props.movieId) {
                    return toggleInWatchlist(true);
                }
            })
        }
    };

    useEffect(()=>{
        console.log('componentDidMount');
        props.getUserMovieWatchlist();
        props.getUserFavoriteMovies();
    }, []);

    useEffect(()=>{
        checkMovieInFavorites();
    },[inFavorites]);

    useEffect(()=>{
        checkMovieInWatchList();
    },[inWatchlist]);

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


    console.log('render');

    return (
        <div className={style.buttons}>
            <div className={style.action} onMouseLeave={() => toggleRateOpen(false)}>
                {!props.isAuth
                    ? <button className={style.btn}><img className={style.icon} src={rate} alt=""/></button>
                    : <div>
                        <button className={style.btn} onMouseOver={() => toggleRateOpen(true)}><img
                            className={style.icon} src={rate} alt=""/></button>
                        {rateOpen
                            ? <form className={style.rate} onSubmit={handleSubmitRating}>
                                <select id="rating" onChange={handleChangeRating} value={rating}
                                        className={style.hashmarks}>
                                    <option value="0" label={"0"}/>
                                    <option value="2" label={"2"}/>
                                    <option value="4" label={"4"}/>
                                    <option value="6" label={"6"}/>
                                    <option value="8" label={"8"}/>
                                    <option value="10" label={"10"}/>
                                </select>
                                <button type={"submit"}>Submit rating</button>
                            </form>
                            : null
                        }
                    </div>
                }
            </div>
            {!props.isAuth
                ? <div className={style.action}>
                    <button className={style.btn}>
                        <img className={style.icon} src={like} alt=""/>
                    </button>
                </div>
                : <div>
                    {inFavorites
                        ? <ActionBarBtn added={inFavorites} callback={removeFavorites}
                                        title={"Remove from favorites"} imgPath={like}/>
                        : <ActionBarBtn added={inFavorites} callback={addFavorites}
                                        title={"Add to favorites"} imgPath={like}/>
                    }
                </div>
            }
            {!props.isAuth
                ? <div className={style.action}>
                    <button className={style.btn}>
                        <img className={style.icon} src={mark} alt=""/>
                    </button>
                </div>
                : <div>
                    {inWatchlist
                        ? <ActionBarBtn added={inWatchlist} callback={removeWatchList}
                                        title={"Remove from watchlist"} imgPath={mark}/>
                        : <ActionBarBtn added={inWatchlist} callback={addWatchList}
                                        title={"Add to watchlist"} imgPath={mark}/>
                    }
                </div>
            }
            {!props.isAuth
                ? <div className={style.action}>
                    <button className={style.btn}>
                        <img className={style.icon} src={watch} alt=""/>
                    </button>
                </div>
                : <ActionBarPlayListsBtn imgPath={watch} movieId={props.movieId} title={"Playlists"}/>
            }
        </div>
    )

}

let mapStateToProps = (state) => {
    return {
        accountId: state.account.currentUserAccountId,
        usersMovieWatchlist: state.account.userMovieWatchlist,
        usersFavorites: state.account.userFavoriteMovies,
    }
};


export default compose(connect(mapStateToProps, {
    rateMovie,
    addToWatchList,
    addToFavorites,
    removeFromWatchList,
    removeFromFavorites,
    getUserMovieWatchlist,
    getUserFavoriteMovies
}))(MovieActionBar);