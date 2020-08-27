import style from "../Detailes.module.scss";
import React, {useEffect, useState} from "react";
import List from "./List";

const ActionBarPlayListsBtn = (props) => {

    const [listOpen, toggleListOpen] = useState(false);

    const openList = () => {
        toggleListOpen( true);
    };
    const closeList = () => {
        toggleListOpen( false);
    };


    return (
        <div className={style.action} onMouseLeave={closeList}>
            <button className={style.btn} onMouseOver={openList}>
                <img className={style.icon} src={props.imgPath} alt=""/>
            </button>
            {listOpen
                ? <div className={style.playlists_btn_popup}>
                    <p className={style.playlists_btn_popup_text}>{props.title}</p>
                    <ul className={style.playlists_btn_popup_playlists}>
                        {props.userLists.map(list => {
                            return <List key={list.id} id={list.id} name={list.name} movieId={props.movieId}/>
                        })}
                    </ul>
                </div>
                : null}
        </div>
    )


};



export default ActionBarPlayListsBtn;
