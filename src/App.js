import React from 'react';
import './App.module.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import MoviesContainer from "./components/Main/Movies/MoviesContainer";
import Footer from "./components/footer/Footer";
import style from './App.module.css';

function App() {
  return (
      <div>
        <header>
            <HeaderContainer/>
        </header>
          <main>
              <MoviesContainer/>
          </main>
          <footer>
              <Footer/>
          </footer>
      </div>
  );
}

export default App;
