import React from 'react';
import {connect} from "react-redux";
import {toggleActorsMenu, toggleMoviesMenu, toggleTvShowsMenu} from "../../redux/listReducer";
import {getUserAccData} from "../../redux/accountReducer";
import {logout} from "../../redux/authReducer";
import AuthContext from "../../context/AuthContext";
import Header from "./Header";

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
        return (
            <AuthContext.Consumer>
                {(isAuth)=><Header isAuth={isAuth}
                                   movieMenu={this.state.movieMenu}
                                   tvMenu={this.state.tvMenu}
                                   logout={this.props.logout}
                                   userAvatar={this.props.userAvatar} />}
            </AuthContext.Consumer>

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