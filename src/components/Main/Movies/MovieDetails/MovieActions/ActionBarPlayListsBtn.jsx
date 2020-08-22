import style from "../Detailes.module.scss";
import React, {useEffect, useState} from "react";
import List from "./List";
import {connect} from "react-redux";
import {getCreatedLists} from "../../../../../redux/accountReducer";
import {getPlaylistDetails} from "../../../../../redux/playlistsReducer";
import {addToPlayList} from "../../../../../redux/moviesReducer";

const ActionBarPlayListsBtn = (props) => {

    const [listOpen, toggleListOpen] = useState(false);

    useEffect(() => {
        props.getCreatedLists();
    });

    const openList = () => {
        toggleListOpen( true);
    };
    const closeList = () => {
        toggleListOpen( false);
    };


    if (props.userLists) {
        return (
            <div className={style.action} onMouseLeave={closeList}>
                <button className={style.btn} onMouseOver={openList}>
                    <img className={style.icon} src={props.imgPath} alt=""/>
                </button>
                {listOpen
                    ? <div className={style.popup}>
                        <p className={style.popup_text}>{props.title}</p>
                        <ul className={style.popup_playlists}>
                            {props.userLists.map(list => {
                                return <List key={list.id} id={list.id} name={list.name} movieId={props.movieId}/>
                            })}
                        </ul>
                    </div>
                    : null}
            </div>
        )
    }
    return null;
};

let mapStateToProps = (state) => {
    return {
        userLists: state.account.userLists,
    }
};

export default connect(mapStateToProps, {getCreatedLists, getPlaylistDetails, addToPlayList})(ActionBarPlayListsBtn);
