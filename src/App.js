import React from 'react';
import './App.module.scss';
import MoviesContainer from "./components/Main/Movies/MoviesContainer";
import Footer from "./components/footer/Footer";
import style from './App.module.scss';
import HeaderContainer from "./components/Header/HeaderContainer.jsx";

function App() {
  return (
      <div className={style.app}>
        <header className={style.header}>
            <HeaderContainer/>
        </header>
          <main className={style.main}>
              <MoviesContainer/>
          </main>
          <footer className={style.footer}>
              <Footer/>
          </footer>
      </div>
  );
}

export default App;
