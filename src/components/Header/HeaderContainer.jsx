import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {toggleActorsMenu, toggleMoviesMenu, toggleTvShowsMenu} from "../../redux/listReducer";
import {getUserAccData} from "../../redux/accountReducer";
import {logout} from "../../redux/authReducer";
import AuthContext from "../../context/AuthContext";
import Header from "./Header";

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
            <AuthContext.Consumer>
                {(isAuth)=><Header isAuth={isAuth}
                                   movieMenu={movieMenu}
                                   tvMenu={tvMenu}
                                   logout={props.logout}
                                   userAvatar={props.userAvatar} />}
            </AuthContext.Consumer>
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