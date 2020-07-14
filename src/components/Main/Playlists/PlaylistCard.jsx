import React from "react";
import style from '../../Account/Account.module.scss';
import {NavLink} from "react-router-dom";

const PlaylistCard =(props) =>{
    return (
        <div className={style.playlist}>
            <NavLink to={`/playlist/${props.id}`}>
                {/*<img src={``} alt=""/>*/}
                <strong>{props.name}</strong>
                <p>{props.description}</p>
                <p>{props.item_count} items</p>
            </NavLink>
        </div>

    )
};

export default PlaylistCard;