import React from 'react';
import style from './Header.module.scss';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {toggleActorsMenu, toggleMoviesMenu, toggleTvShowsMenu} from "../../redux/listReducer";
import SearchContainer from "./SearchContainer";
import Login from "./Login/Login";
import TmdbLogin from "./TmbdLogin/TmdbLogin";
import {getUserAccData} from "../../redux/accountReducer";

class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.getUserAccData();
    }

    render(){
        let MovieMenuText, TvShowsMenuText;
        if(this.props.moviesMenu){
            MovieMenuText = (
                <ul className={style.verticalMenu}>
                    <li className={style.verticalItem}><NavLink className={style.link} to={"/movies"}>Popular Movies</NavLink></li>
                    <li className={style.verticalItem}><NavLink className={style.link} to={"/nowplayingmovies"}>Now Playing Movies</NavLink></li>
                </ul>
            );
        }if(this.props.tvShowsMenu){
            TvShowsMenuText =  (
                <ul className={style.verticalMenu}>
                    <li className={style.verticalItem}><NavLink className={style.link} to={"/tvshows"}>Popular Tv Shows</NavLink></li>
                    <li className={style.verticalItem}><NavLink className={style.link} to={"/toptvshows"}>Now Playing Tv Shows</NavLink></li>
                </ul>
            )
        }
        return (
            <div className={style.container}>
                <div className={style.logo}>Yuretz</div>
                <ul className={style.menu}>
                    <li className={style.item} onClickCapture={()=>this.props.toggleMoviesMenu()} onMouseLeave={()=>this.props.toggleMoviesMenu()}>Movies{MovieMenuText}</li>
                    <li className={style.item} onClickCapture={()=>this.props.toggleTvShowsMenu()} onMouseLeave={()=>this.props.toggleTvShowsMenu()}>Tv Shows{TvShowsMenuText}</li>
                    <li className={style.item}><NavLink className={style.link} to={"/actors"}>Actors</NavLink></li>
                    <li className={style.item}><NavLink className={style.link} to={"/about"}>About</NavLink></li>
                </ul>
                <SearchContainer/>
                <div>
                    {!this.props.isAuth
                    ? <Login />
                    : <NavLink className={style.link} to={"/account"}><img src={this.props.userAvatar
                        ? `https://www.gravatar.com/avatar/${this.props.userAvatar.avatar.gravatar.hash}?s=50`
                        : `https://via.placeholder.com/200x300`} alt=""/></NavLink>}
                </div>
                <div>
                    <TmdbLogin isAuth={this.props.isAuth}/>
                </div>
            </div>
        )
    }

};

let mapStateToProps = (state)=>{
    return {
        moviesMenu: state.list.moviesMenuOpen,
        tvShowsMenu :state.list.tvShowsMenuOpen,
        actorsMenu: state.list.actorsMenuOpen,
        isAuth: state.auth.isAuth,
        userAvatar: state.account.userAccountData
    }
};

export default connect(mapStateToProps, {toggleMoviesMenu,toggleTvShowsMenu,toggleActorsMenu, getUserAccData})(HeaderContainer);