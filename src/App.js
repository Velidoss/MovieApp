import React, {Component} from 'react';
import './App.module.scss';
import PopularMoviesContainer from "./components/Main/Movies/PopularMoviesContainer";
import Footer from "./components/footer/Footer";
import style from './App.module.scss';
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import {Route, withRouter} from "react-router-dom";
import TvShowsContainer from "./components/Main/Tvshows/PopularTvShowsContainer";
import MovieDetailsContainer from "./components/Main/Movies/MovieDetails/MovieDetailsContainer";
import TvShowDetailsContainer from "./components/Main/Tvshows/TvShowDetails/TvShowDetailsContainer";
import ActorsContainer from "./components/Main/Actors/ActorsContainer";
import ActorDetailsContainer from "./components/Main/Actors/ActorDetailsContainer";
import NowPlayingMoviesContainer from "./components/Main/Movies/NowPlayingMoviesContainer";
import TopTvShowsContainer from "./components/Main/Tvshows/TopTvShowsContainer";
import About from "./components/About/About";
import Cookies from "js-cookie";
import {connect} from "react-redux";
import {checkSession, createSessionId} from "./redux/authReducer";
import {compose} from "redux";
import AccountPageContainer from "./components/Account/AccountPageContainer";
import PlaylistDetailsContainer from "./components/Main/Playlists/PlaylistDetailsContainer";
import {initialiseApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import Login from "./components/Header/Login/Login";
import AuthContext from "./context/AuthContext";

class App extends Component {

    componentDidMount() {
        this.props.initialiseApp();
        this.createSessionId();
    }

    createSessionId = () =>{
        if( Cookies.get('request_token')){
            this.props.createSessionId(Cookies.get('request_token'));
        }else{
            return 'Request token is absent'
        }
    };

    render() {
        if(!this.props.initialised){
            return <Preloader/>
        }
        return (
            <AuthContext.Provider value={ this.props.isAuth}>
                <div className={style.app}>
                    <header className={style.header}>
                        <HeaderContainer />
                    </header>
                    <main className={style.main}>
                        <Route exact path={"/"} render={() => (<PopularMoviesContainer/>)}/>
                        <Route path={"/movies"} render={() => (<PopularMoviesContainer/>)}/>
                        <Route path={"/nowplayingmovies"} render={() => (<NowPlayingMoviesContainer/>)}/>
                        <Route path={"/movie/:movieId?"} render={() => (<MovieDetailsContainer/>)}/>
                        <Route path={"/toptvshows"} render={() => (<TopTvShowsContainer/>)}/>
                        <Route path={"/tvshows"} render={() => (<TvShowsContainer/>)}/>
                        <Route path={"/tvshow/:tvShowId?"} render={() => (<TvShowDetailsContainer/>)}/>
                        <Route path={"/actors"} render={() => (<ActorsContainer/>)}/>
                        <Route path={"/actor/:actorId?"} render={() => (<ActorDetailsContainer/>)}/>
                        <Route path={"/about"} render={() => (<About/>)}/>
                        <Route path={"/account"} render={() => (<AccountPageContainer/>)}/>
                        <Route path={"/playlist/:listId?"} render={() => (<PlaylistDetailsContainer/>)}/>
                        <Route path={"/login"} render={() => (<Login/>)}/>
                    </main>
                    <footer className={style.footer}>
                        <Footer/>
                    </footer>
                </div>
            </AuthContext.Provider>

        );
    }
}

let mapStateToProps = (state)=>{
    return {
        isAuth : state.auth.isAuth,
        initialised : state.app.initialised,
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, {createSessionId, checkSession, initialiseApp}),
)(App);
