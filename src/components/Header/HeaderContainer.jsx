import React, {useEffect} from 'react';
import style from './Header.module.scss';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {toggleActorsMenu, toggleMoviesMenu, toggleTvShowsMenu} from "../../redux/listReducer";
import SearchContainer from "./SearchContainer";
import {getUserAccData} from "../../redux/accountReducer";
import Dropdown from "./Dropdown/Dropdown";
import {logout} from "../../redux/authReducer";

const HeaderContainer = (props) => {

    const movieMenu = [
        {
            id: 0,
            title: "Popular Movies",
            selected: false,
            link: "/movies",
            key: "movieMenu"
        },
        {
            id: 1,
            title: "Now Playing Movies",
            selected: false,
            link: "/nowplayingmovies",
            key: "movieMenu"
        }];
    const tvMenu = [
        {
            id: 0,
            title: "Popular Tv Shows",
            selected: false,
            link: "/tvshows",
            key: "tvMenu"
        },
        {
            id: 1,
            title: "Top rated Tv Shows",
            selected: false,
            link: "/toptvshows",
            key: "tvMenu"
        }];


    useEffect(() => {
        props.getUserAccData();
    }, []);

    return (
        <div className={style.container}>
            <div className={style.logo}>Yuretz</div>
            <ul className={style.menu}>
                <Dropdown title={"Movies"} list={movieMenu}/>
                <Dropdown title={"Tv shows"} list={tvMenu}/>
                <li className={style.item}><NavLink className={style.link} to={"/actors"}>Actors</NavLink></li>
                <li className={style.item}><NavLink className={style.link} to={"/about"}>About</NavLink></li>
            </ul>
            <SearchContainer/>
            <div>
                {!props.isAuth
                    ? <div className={style.login}>
                        <NavLink to={`/login`} className={style.login_link}>Login</NavLink>
                    </div>
                    : <div className={style.auth_section}>
                        <NavLink className={style.acc_link} to={"/account"}><img className={style.avatar}
                             src={props.userAvatar
                                 ? `https://www.gravatar.com/avatar/${props.userAvatar.avatar.gravatar.hash}?s=50`
                                 : `https://via.placeholder.com/200x300`}
                             alt=""/></NavLink>
                        <div className={style.btn_container}>
                            <button className={style.btn} type={"submit"} onClick={props.logout}>Logout
                            </button>
                        </div>
                    </div>}
            </div>
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        moviesMenu: state.list.moviesMenuOpen,
        tvShowsMenu: state.list.tvShowsMenuOpen,
        actorsMenu: state.list.actorsMenuOpen,
        isAuth: state.auth.isAuth,
        userAvatar: state.account.userAccountData
    }
};

export default connect(mapStateToProps, {
    toggleMoviesMenu,
    toggleTvShowsMenu,
    toggleActorsMenu,
    getUserAccData,
    logout
})(HeaderContainer);