import React from 'react';
import style from './Header.module.scss';
import {NavLink} from "react-router-dom";

const HeaderContainer = ()=>{
    return (
        <div className={style.container}>
            <div className={style.logo}>Yuretz</div>
            <ul className={style.menu}>
                <li className={style.item}><NavLink className={style.link} to={"/movies"}>Movies</NavLink></li>
                <li className={style.item}><NavLink className={style.link} to={"/tvshows"}>Tv-Shows</NavLink></li>
                <li className={style.item}>Actors</li>
                <li className={style.item}>About</li>
            </ul>
            <div className={style.search}>
                <input type="text"/>
            </div>
            <div className={style.user}>
                <img className={style.userImg}  src="https://api.adorable.io/avatars/285/abott@adorable.png" alt=""/>
            </div>
        </div>
    )
};

export default HeaderContainer;