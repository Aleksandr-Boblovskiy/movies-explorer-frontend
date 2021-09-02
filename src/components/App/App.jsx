/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
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
import moviesApi from '../../utils/MoviesApi';

function App() {
  const [cards, setCards] = React.useState([]);
  const [preloaderVisible, setpreloaderVisible] = React.useState(false);
  const [notFoundText, setnotFoundText] = React.useState(false);
  const [moreButton, setmoreButton] = React.useState(false);
  const [filterMovies, setFilterMovies] = React.useState([]);

  moviesApi.getInitialCards()
    .then((data) => {
      localStorage.setItem('allMovies', JSON.stringify(data));
      // if (document.documentElement.clientWidth < 768) {
      //   for (let i = 0; i < 5; i += 1) {
      //     movies.push(testMovies[i]);
      //   }
      // } else if (document.documentElement.clientWidth < 1024) {
      //   for (let i = 0; i < 8; i += 1) {
      //     movies.push(testMovies[i]);
      //   }
      // } else {
      //   for (let i = 0; i < 12; i += 1) {
      //     movies.push(testMovies[i]);
      //   }
      // }
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

  function searchFilm(filmName) {
    setpreloaderVisible(true);
    setmoreButton(false);
    setCards([]);
    const showMovies = [];
    const allMovies = JSON.parse(localStorage.getItem('allMovies'));
    const findMovies = allMovies.filter((item) => item.nameRU.toLowerCase().includes(filmName.toLowerCase()));
    localStorage.setItem('findMovies', JSON.stringify(findMovies));
    if (findMovies.length === 0) {
      setnotFoundText(true);
    } else {
      setnotFoundText(false);
      setpreloaderVisible(false);
    }
    if (findMovies.length > 3) {
      setmoreButton(true);
      for (let i = 0; i < 3; i++) {
        showMovies.push(findMovies.shift());
      }
      setFilterMovies(findMovies);
      setpreloaderVisible(false);
      setCards(showMovies);
    } else {
      setpreloaderVisible(false);
      setCards(findMovies);
    }
  }

  function clickMore() {
    const showMovies = cards;
    const findMovies = filterMovies;
    if (findMovies.length > 3) {
      for (let i = 0; i < 3; i++) {
        showMovies.push(findMovies.shift());
      }
      setCards(showMovies);
      setpreloaderVisible(false);
      console.log(cards);
    }
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
            <Movies movies={cards} searchFilm={searchFilm} preloader={preloaderVisible} notFoundText={notFoundText} moreButton={moreButton} clickMore={clickMore} />
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
            <SavedMovies />
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
