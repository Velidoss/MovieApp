import React from 'react';
import style from './Header.module.scss';

const HeaderContainer = ()=>{
    return (
        <div className={style.container}>
            <div className={style.logo}>Yuretz</div>
            <ul className={style.menu}>
                <li className={style.item}>Movies</li>
                <li className={style.item}>Tv-Shows</li>
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