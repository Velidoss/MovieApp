import React from "react";
import style from "./Header.module.scss";
import Dropdown from "./Dropdown/Dropdown";
import {NavLink} from "react-router-dom";
import SearchContainer from "./SearchContainer";

const Header = ({movieMenu, tvMenu, isAuth, userAvatar, logout})=>(
    <div className={style.container}>
        <div className={style.logo}>VELIDOSS</div>
        <ul className={style.menu}>
            <Dropdown title={"Movies"} list={movieMenu} />
            <Dropdown title={"Tv shows"} list={tvMenu} />
            <li className={style.item}><NavLink className={style.link} to={"/actors"}>Actors</NavLink></li>
            <li className={style.item}><NavLink className={style.link} to={"/about"}>About</NavLink></li>
        </ul>
        <SearchContainer/>
        <div>
            {!isAuth
                ? <div className={style.login}>
                    <NavLink  to={`/login`} className={style.login_link}>Login</NavLink>
                </div>
                : <div className={style.auth_section}>
                    <NavLink className={style.acc_link} to={"/account"}><img className={style.avatar} src={userAvatar
                        ? `https://www.gravatar.com/avatar/${userAvatar.avatar.gravatar.hash}?s=50`
                        : `https://via.placeholder.com/50x50`} alt=""/></NavLink>
                    <div className={style.btn_container}>
                        <button className={style.btn} type={"submit"} onClick={logout}>Logout</button>
                    </div>
                </div> }
        </div>
    </div>
);

export default Header;