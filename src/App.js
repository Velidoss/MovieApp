import React from 'react';
import './App.module.scss';
import MoviesContainer from "./components/Main/Movies/MoviesContainer";
import Footer from "./components/footer/Footer";
import style from './App.module.scss';
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import {Route} from "react-router-dom";
import TvShowsContainer from "./components/Main/Tvshows/TvShowsContainer";
import MovieDetailsContainer from "./components/Main/Movies/MovieDetails/MovieDetailsContainer";
import TvShowDetailsContainer from "./components/Main/Tvshows/TvShowDetails/TvShowDetailsContainer";
import ActorsContainer from "./components/Main/Actors/ActorsContainer";
import ActorDetailsContainer from "./components/Main/Actors/ActorDetailsContainer";

function App() {
  return (
      <div className={style.app}>
        <header className={style.header}>
            <HeaderContainer/>
        </header>
          <main className={style.main}>
              <Route path={"/movies"} render={()=>(<MoviesContainer/>)} />
              <Route path={"/movie/:movieId?"} render={()=>(<MovieDetailsContainer/>)} />
              <Route path={"/tvshows"} render={()=>(<TvShowsContainer/>)} />
              <Route path={"/tvshow/:tvShowId?"} render={()=>(<TvShowDetailsContainer/>)} />
              <Route path={"/actors"} render={()=>(<ActorsContainer/>)} />
              <Route path={"/actor/:actorId?"} render={()=>(<ActorDetailsContainer/>)} />
          </main>
          <footer className={style.footer}>
              <Footer/>
          </footer>
      </div>
  );
}

export default App;
