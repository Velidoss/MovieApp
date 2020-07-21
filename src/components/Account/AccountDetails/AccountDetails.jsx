import React from 'react';
import style from './../Account.module.scss';
import {NavLink} from "react-router-dom";

const AccountDetails = (props) => {

    return (
        <div className={style.user_details}>
            <div>
                <img className={style.user_image} src={`https://www.gravatar.com/avatar/${props.accountData.avatar.gravatar.hash}?s=150`} alt=""/>
            </div>
            <div className={style.user_personal_info}>
                <p>{props.accountData.name}</p>
            </div>
            <div className={style.user_menu}>
                <ul className={style.user_menu_list}>
                    <li className={style.item} ><NavLink activeClassName={style.link_active} className={style.link} to={`/account/favorite`} >Favorite</NavLink></li>
                    <li className={style.item} ><NavLink activeClassName={style.link_active} className={style.link} to={`/account/playlists`} >Playlists</NavLink></li>
                    <li className={style.item} ><NavLink activeClassName={style.link_active} className={style.link} to={`/account/rated/movies`} >Ratings</NavLink></li>
                    <li className={style.item} ><NavLink activeClassName={style.link_active} className={style.link} to={`/account/watchlist`} >Watchlist</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default AccountDetails;