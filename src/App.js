import React from 'react';
import './App.module.scss';
import PopularMoviesContainer from "./components/Main/Movies/PopularMoviesContainer";
import Footer from "./components/footer/Footer";
import style from './App.module.scss';
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import {Route} from "react-router-dom";
import TvShowsContainer from "./components/Main/Tvshows/PopularTvShowsContainer";
import MovieDetailsContainer from "./components/Main/Movies/MovieDetails/MovieDetailsContainer";
import TvShowDetailsContainer from "./components/Main/Tvshows/TvShowDetails/TvShowDetailsContainer";
import ActorsContainer from "./components/Main/Actors/ActorsContainer";
import ActorDetailsContainer from "./components/Main/Actors/ActorDetailsContainer";
import NowPlayingMoviesContainer from "./components/Main/Movies/NowPlayingMoviesContainer";
import TopTvShowsContainer from "./components/Main/Tvshows/TopTvShowsContainer";
import About from "./components/About/About";

function App() {
  return (
      <div className={style.app}>
        <header className={style.header}>
            <HeaderContainer/>
        </header>
          <main className={style.main}>
              <Route exact path={"/"} render={()=>(<PopularMoviesContainer/>)} />
              <Route path={"/movies"} render={()=>(<PopularMoviesContainer/>)} />
              <Route path={"/nowplayingmovies"} render={()=>(<NowPlayingMoviesContainer/>)} />
              <Route path={"/movie/:movieId?"} render={()=>(<MovieDetailsContainer/>)} />
              <Route path={"/toptvshows"} render={()=>(<TopTvShowsContainer/>)} />
              <Route path={"/tvshows"} render={()=>(<TvShowsContainer/>)} />
              <Route path={"/tvshow/:tvShowId?"} render={()=>(<TvShowDetailsContainer/>)} />
              <Route path={"/actors"} render={()=>(<ActorsContainer/>)} />
              <Route path={"/actor/:actorId?"} render={()=>(<ActorDetailsContainer/>)} />
              <Route path={"/about"} render={()=>(<About/>)} />
          </main>
          <footer className={style.footer}>
              <Footer/>
          </footer>
      </div>
  );
}

export default App;
