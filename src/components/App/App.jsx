/* eslint-disable no-console */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Landing/Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import moviesdb from './movies';
import moviesApi from '../../utils/MoviesApi';
// import Preloader from '../Preloader/Preloader';

function App() {
  const [cards, setCards] = React.useState([]);
  const movies = [];
  let testMovies = [];

  moviesApi.getInitialCards()
    .then((data) => {
      testMovies = data;

      if (document.documentElement.clientWidth < 768) {
        for (let i = 0; i < 5; i += 1) {
          movies.push(testMovies[i]);
        }
      } else if (document.documentElement.clientWidth < 1024) {
        for (let i = 0; i < 8; i += 1) {
          movies.push(testMovies[i]);
        }
      } else {
        for (let i = 0; i < 12; i += 1) {
          movies.push(testMovies[i]);
        }
      }
      setCards(movies);
    })
    .catch((err) => {
      console.log(err);
    });

  // window.addEventListener('resize', () => {
  //   setTimeout(() => {
  //     movies = [];
  //     if (document.documentElement.clientWidth < 768) {
  //       for (let i = 0; i < 5; i += 1) {
  //         movies.push(moviesdb[i]);
  //       }
  //     } else if (document.documentElement.clientWidth < 1024) {
  //       for (let i = 0; i < 8; i += 1) {
  //         movies.push(moviesdb[i]);
  //       }
  //     } else {
  //       for (let i = 0; i < 12; i += 1) {
  //         movies.push(moviesdb[i]);
  //       }
  //     }
  //   }, 200);
  // });

  const savedmovies = [];
  for (let i = 0; i < 3; i += 1) {
    savedmovies.push(moviesdb[i]);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Switch>
          <Route exact path="/">
            <Header />
            <Main />
            <Footer />
          </Route>
          <Route path="/movies">
            <Header />
            <Movies movies={cards} />
            <Footer />
          </Route>
          <Route path="/profile">
            <Header />
            <Profile />
          </Route>
          <Route path="/profile_edit">
            <Header />
            <Profile />
          </Route>
          <Route path="/saved-movies">
            <Header />
            <SavedMovies movies={savedmovies} />
            <Footer />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
