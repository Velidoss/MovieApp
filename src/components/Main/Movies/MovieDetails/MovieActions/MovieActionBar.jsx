import React, {useEffect, useState} from "react";
import style from "../Detailes.module.scss";
import {connect} from "react-redux";
import rate from "../../../../../styles/svg/star-solid.svg";
import like from "../../../../../styles/svg/heart-solid.svg";
import mark from "../../../../../styles/svg/bookmark-solid.svg";
import watch from "../../../../../styles/svg/clipboard-list-solid.svg";
import {
    addToFavorites,
    addToWatchList,
    removeFromFavorites,
    removeFromWatchList,
} from "../../../../../redux/accountReducer";
import ActionBarBtn from "./ActionBarBtn";
import {playlistsAPI, userAPI} from "../../../../../DAL/api";
import ActionBarList from "./ActionBarList";

const MovieActionBar =(props)=>{

    //хук состояния
    const [rateOpen, setRateOpen] = useState(false);
    const [inUsersWatchlist, setInUsersWatchlist] = useState(false);
    const [inUsersFavorites, setInUsersFavorites] = useState(false);
    const [usersLists, setUsersLists] = useState(null);

    const checkMovieInFavorites = ()=>{
        userAPI.queryFavoriteMovies().then(response=>{
            response.results.find(item=>{
                if(item.id === props.movieId){
                    return setInUsersFavorites(true);
                }
            })
        });
    };
    const checkMovieInWatchlist=()=> {
        userAPI.queryMovieWatchList().then(response => {
            response.results.find(item => {
                if (item.id === props.movieId) {
                    return setInUsersWatchlist(true);
                }
            })
        })
    };

    const getUsersLists = ()=>{
        userAPI.queryCreatedLists().then(response=>{
            setUsersLists(response);
            }
        )
    };

    useEffect(()=> {
        checkMovieInFavorites();
        },[inUsersFavorites]
    );
    useEffect(()=> {
        checkMovieInWatchlist();
        },[inUsersWatchlist]
    );
    useEffect(() => {
        getUsersLists();
    }, []);




    const addWatchList = ()=>{
        userAPI.addToWatchList(props.accountId, props.mediaType, props.movieId).then(response=>{
            if (response.status_code === 1){
                alert("Added to watchlist!");
                setInUsersWatchlist(true);
            }
        })
    };
    const addFavorites = () =>{
        userAPI.addToFavorites(props.accountId, props.mediaType, props.movieId).then(response=>{
            if (response.status_code === 1){
                alert("Added to favorites!");
                setInUsersFavorites(true);
            }
        })
    };

    const removeWatchList = ()=>{
        userAPI.removeFromWatchList(props.accountId, props.mediaType, props.movieId).then(response=>{
            if (response.status_code === 13){
                alert(response.status_message);
                setInUsersWatchlist(false);
            }
        })
    };
    const removeFavorites = () =>{
        userAPI.removeFromFavorites(props.accountId, props.mediaType, props.movieId).then(response=>{
            if (response.status_code === 13){
                alert(response.status_message);
                setInUsersFavorites(false);
            }
        })
    };

    const addToPlayList=(playlistId)=>{
        playlistsAPI.addToPlayList(playlistId, props.movieId).then(response=>{
                if(response.status_code===1){
                    alert(response.status_message);
                }
            })
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
            {inUsersFavorites
                ? <ActionBarBtn added={inUsersFavorites} callback={removeFavorites} title={"Remove from favorites"} imgPath={like}/>
                : <ActionBarBtn added={inUsersFavorites} callback={addFavorites} title={"Add to favorites"} imgPath={like}/>
            }
            {inUsersWatchlist
                ? <ActionBarBtn added={inUsersWatchlist} callback={removeWatchList} title={"Remove from watchlist"} imgPath={mark}/>
                : <ActionBarBtn added={inUsersWatchlist} callback={addWatchList} title={"Add to watchlist"} imgPath={mark}/>
            }
            <ActionBarList imgPath={watch} addToPlayList={addToPlayList}  title={"Add to playlist"} usersLists={usersLists}/>

        </div>
        )
};

let mapStateToProps = (state)=>{
    return {
        accountId: state.account.currentUserAccountId,
    }
};


export default connect(mapStateToProps, {addToWatchList,addToFavorites, removeFromWatchList, removeFromFavorites})(MovieActionBar);