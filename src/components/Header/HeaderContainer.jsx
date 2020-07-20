import React from 'react';
import style from './Header.module.scss';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {toggleActorsMenu, toggleMoviesMenu, toggleTvShowsMenu} from "../../redux/listReducer";
import SearchContainer from "./SearchContainer";
import Login from "./Login/Login";
import TmdbLogin from "./TmbdLogin/TmdbLogin";
import {getUserAccData} from "../../redux/accountReducer";
import Dropdown from "./Dropdown/Dropdown";
import {logout} from "../../redux/authReducer";

class HeaderContainer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            movieMenu: [
                {
                    id: 0,
                    title: "Popular Movies",
                    selected: false,
                    link:"/movies",
                    key: "movieMenu"
                },
                {
                    id: 1,
                    title: "Now Playing Movies",
                    selected: false,
                    link:"/nowplayingmovies",
                    key: "movieMenu"
                }
            ],
            tvMenu:[
                {
                    id: 0,
                    title: "Popular Tv Shows",
                    selected: false,
                    link:"/tvshows",
                    key: "tvMenu"
                },
                {
                    id: 1,
                    title: "Top rated Tv Shows",
                    selected: false,
                    link:"/toptvshows",
                    key: "tvMenu"
                }

            ]
        }
    }

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
                    <Dropdown title={"Movies"} list={this.state.movieMenu} />
                    <Dropdown title={"Tv shows"} list={this.state.tvMenu} />
                    <li className={style.item}><NavLink className={style.link} to={"/actors"}>Actors</NavLink></li>
                    <li className={style.item}><NavLink className={style.link} to={"/about"}>About</NavLink></li>
                </ul>
                <SearchContainer/>
                <div>
                    {!this.props.isAuth
                    ? <div className={style.item}>
                        <NavLink to={`/login`} className={style.link}>Login</NavLink>
                    </div>
                    : <div className={style.auth_section}>
                        <NavLink className={style.acc_link} to={"/account"}><img className={style.avatar} src={this.props.userAvatar
                            ? `https://www.gravatar.com/avatar/${this.props.userAvatar.avatar.gravatar.hash}?s=50`
                            : `https://via.placeholder.com/200x300`} alt=""/></NavLink>
                            <div className={style.btn_container}>
                                <button className={style.btn} type={"submit"} onClick={this.props.logout}>Logout</button>
                            </div>
                    </div> }
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

export default connect(mapStateToProps, {toggleMoviesMenu,toggleTvShowsMenu,toggleActorsMenu, getUserAccData,logout})(HeaderContainer);