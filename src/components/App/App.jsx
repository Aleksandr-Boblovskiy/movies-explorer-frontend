/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-console */
import React from 'react';
import {
  Route, Switch, useHistory, Redirect,
} from 'react-router-dom';
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
import MoviesApi from '../../utils/MoviesApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as MainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [cards, setCards] = React.useState([]);
  const [saveCards, setSaveCards] = React.useState([]);
  const [saveVisuCards, setSaveVisuCards] = React.useState([]);
  const [preloaderVisible, setpreloaderVisible] = React.useState(false);
  const [notFoundText, setnotFoundText] = React.useState(false);
  const [moreButton, setmoreButton] = React.useState(false);
  const [filterMovies, setFilterMovies] = React.useState([]);
  const [filterValue, setFilterValue] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [textErr, setTextErr] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});
  // const [registredStatus, setRegistredStatus] = React.useState();

  const history = useHistory();

  React.useEffect(() => {
    const showMovies = [];
    setmoreButton(false);
    let findMovies = JSON.parse(localStorage.getItem('findMovies'));

    MainApi.getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
        MainApi.getMovies()
          .then((data) => {
            setSaveCards(data);
            const tmpArr = [];
            data.forEach((item) => {
              if (item.owner === currentUser._id) {
                tmpArr.push(item);
              }
            });
            setSaveVisuCards(tmpArr);
            findMovies.forEach((movie) => {
              if (data.findIndex((item) => {
                if (item.movieId === movie.movieId && item.owner === userData._id) {
                  return true;
                }
                return false;
              }) !== -1) {
                movie.save = true;
              }
            });

            if (findMovies) {
              if (filterValue) {
                findMovies = findMovies.filter((item) => item.duration <= 40);
              }
              if (findMovies.length > 12) {
                setmoreButton(true);
                for (let i = 0; i < 12; i++) {
                  showMovies.push(findMovies.shift());
                }
                setFilterMovies(findMovies.slice());
                setpreloaderVisible(false);
                setCards(showMovies.slice());
              } else if (findMovies.length === 0) {
                setnotFoundText(true);
                setpreloaderVisible(true);
                setCards(findMovies.slice());
              } else {
                setnotFoundText(false);
                setpreloaderVisible(false);
                setCards(findMovies.slice());
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filterValue]);

  function handleChangeFilter(e) {
    setFilterValue(e.target.checked);
  }

  MoviesApi.getInitialCards()
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

  const searchFilm = (filmName) => {
    setpreloaderVisible(true);
    setmoreButton(false);
    setCards([]);
    const showMovies = [];
    const allMovies = JSON.parse(localStorage.getItem('allMovies'));
    let findMovies = allMovies.filter((item) => item.nameRU.toLowerCase().includes(filmName.toLowerCase()));
    const newMass = [];
    findMovies.forEach((movie) => {
      const saveMovie = {};
      saveMovie.country = movie.country;
      saveMovie.director = movie.director;
      saveMovie.duration = movie.duration;
      saveMovie.year = movie.year;
      saveMovie.description = movie.description;
      saveMovie.thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;
      saveMovie.movieId = movie.id;
      // saveMovie.owner = currentUser._id;
      saveMovie.trailer = movie.trailerLink;
      saveMovie.image = `https://api.nomoreparties.co${movie.image.url}`;
      saveMovie.nameRU = movie.nameRU;
      saveMovie.nameEN = movie.nameEN;
      if (saveCards.findIndex((item) => {
        if (item.movieId === saveMovie.movieId && item.owner === currentUser._id) {
          return true;
        }
        return false;
      }) !== -1) {
        saveMovie.save = true;
      }
      newMass.push(saveMovie);
    });
    findMovies = newMass;
    localStorage.setItem('findMovies', JSON.stringify(findMovies));
    if (filterValue) {
      findMovies = findMovies.filter((item) => item.duration <= 40);
    }
    if (findMovies.length > 12) {
      setmoreButton(true);
      for (let i = 0; i < 12; i++) {
        showMovies.push(findMovies.shift());
      }
      setFilterMovies(findMovies);
      setpreloaderVisible(false);
      setCards(showMovies.slice());
    } else if (findMovies.length === 0) {
      setnotFoundText(true);
      setCards(findMovies.slice());
    } else {
      setnotFoundText(false);
      setpreloaderVisible(false);
      setCards(findMovies.slice());
    }
  };

  const clickMore = () => {
    const showMovies = cards;
    const findMovies = filterMovies;
    if (findMovies.length > 3) {
      for (let i = 0; i < 3; i++) {
        showMovies.push(findMovies.shift());
      }
      setCards(showMovies.slice());
    } else {
      for (let i = 0; i < findMovies.length; i++) {
        showMovies.push(findMovies.shift());
      }
      setCards(showMovies.slice());
      setmoreButton(false);
    }
  };

  const handleSaveCard = (movie) => {
    const saveMovie = movie;
    // saveMovie.country = movie.country;
    // saveMovie.director = movie.director;
    // saveMovie.duration = movie.duration;
    // saveMovie.year = movie.year;
    // saveMovie.description = movie.description;
    // saveMovie.thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;
    // saveMovie.movieId = movie.id;
    // // saveMovie.owner = currentUser._id;
    // saveMovie.trailer = movie.trailerLink;
    // saveMovie.image = `https://api.nomoreparties.co${movie.image.url}`;
    // saveMovie.nameRU = movie.nameRU;
    // saveMovie.nameEN = movie.nameEN;
    delete saveMovie.save;
    if (saveCards.findIndex((item) => {
      if (item.movieId === saveMovie.movieId && item.owner === currentUser._id) {
        return true;
      }
      return false;
    }) === -1) {
      if (saveMovie.country === null) {
        saveMovie.country = ' ';
      }
      if (saveMovie.nameEN === '') {
        saveMovie.nameEN = ' ';
      }
      MainApi.saveMovie(saveMovie)
        .then((card) => {
          let tempCards = saveCards;
          tempCards.push(card);
          setSaveCards(tempCards.slice());
          tempCards = saveVisuCards;
          tempCards.push(card);
          setSaveVisuCards(tempCards.slice());
          const index = cards.findIndex((item) => {
            if (item.movieId === card.movieId && card.owner === currentUser._id) {
              return true;
            }
            return false;
          });
          cards[index].save = true;
          setCards(cards.slice());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleDeleteCard = (movie) => {
    const moviedel = saveCards.find((item) => {
      if (item.movieId === movie.movieId && item.owner === currentUser._id) {
        return true;
      }
      return false;
    });
    const { _id } = moviedel;
    MainApi.deleteMovie(_id)
      .then((card) => {
        const index = cards.findIndex((item) => {
          if (item.movieId === card.message.movieId && card.message.owner === currentUser._id) {
            return true;
          }
          return false;
        });
        cards[index].save = false;
        setCards(cards.slice());
        MainApi.getMovies()
          .then((data) => {
            setSaveCards(data);
            const tmpArr = [];
            data.forEach((item) => {
              if (item.owner === currentUser._id) {
                tmpArr.push(item);
              }
            });
            setSaveVisuCards(tmpArr);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchFilmSave = (filmName) => {
    setpreloaderVisible(true);
    MainApi.getMovies()
      .then((data) => {
        const tmpArr = [];
        data.forEach((item) => {
          if (item.owner === currentUser._id) {
            tmpArr.push(item);
          }
        });
        const findCards = tmpArr.filter((item) => item.nameRU.toLowerCase().includes(filmName.toLowerCase()));
        if (findCards.length === 0) {
          setnotFoundText(true);
        } else {
          setnotFoundText(false);
          setpreloaderVisible(false);
        }
        setSaveVisuCards(findCards);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const headerClickSave = () => {
    MainApi.getMovies()
      .then((data) => {
        const tmpArr = [];
        data.forEach((item) => {
          if (item.owner === currentUser._id) {
            tmpArr.push(item);
          }
          setSaveVisuCards(tmpArr.slice());
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // авторизация

  React.useEffect(() => {
    if (loggedIn) {
      MainApi.getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((err) => {
          console.log(err);
        });

      MainApi.getMovies()
        .then((data) => {
          setSaveCards(data);
          const tmpArr = [];
          data.forEach((item) => {
            if (item.owner === currentUser._id) {
              tmpArr.push(item);
            }
          });
          setSaveVisuCards(tmpArr.slice());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      MainApi.checkToken(token)
        .then((res) => {
          setCurrentUser(res);
          setLoggedIn(true);
          history.push('/movies');
        })
        .catch(() => {
          localStorage.removeItem('jwt');
        });
    }
  }, [history]);

  function onRegister({ email, password, name }) {
    setTextErr('');
    MainApi.register(email, password, name)
      .then((res) => {
        MainApi.login(email, password)
          .then((res) => {
            setLoggedIn(true);
            // setCurrentUser({ email, name });
            history.push('/movies');
          })
          .catch((err) => {
            if (err === 'Ошибка: 400') {
              setTextErr('При авторизации произошла ошибка.');
            }
            if (err === 'Ошибка: 401') {
              setTextErr('Вы ввели неправильный логин или пароль.');
            }
          });
      })
      .catch((err) => {
        if (err === 'Ошибка: 400') {
          setTextErr('При регистрации пользователя произошла ошибка.');
        }
        if (err === 'Ошибка: 409') {
          setTextErr('Пользователь с таким email уже существует.');
        }
      });
  }

  function onLogin({ email, password }) {
    setTextErr('');
    MainApi.login(email, password)
      .then((res) => {
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => {
        if (err === 'Ошибка: 400') {
          setTextErr('При авторизации произошла ошибка.');
        }
        if (err === 'Ошибка: 401') {
          setTextErr('Вы ввели неправильный логин или пароль.');
        }
      });
  }

  function onUpdateUser({ email, name }) {
    setTextErr('');
    MainApi.patchUser(email, name)
      .then((res) => {
        setCurrentUser({ email: res.email, name: res.name });
      })
      .catch((err) => {
        if (err === 'Ошибка: 400') {
          setTextErr('При обновлении профиля произошла ошибка.');
        }
        if (err === 'Ошибка: 409') {
          setTextErr('Пользователь с таким email уже существует.');
        }
      });
  }

  function onSignOut() {
    setTextErr('');
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    history.push('/');
  }

  return (
    <div className="page">
      <div className="page__container">
        <CurrentUserContext.Provider value={currentUser}>

          <Switch>
            <Route exact path="/">
              <Header />
              <Main />
              <Footer />
            </Route>
            <ProtectedRoute path="/movies" loggedIn={loggedIn}>
              <Header onClickSave={headerClickSave} />
              <Movies movies={cards} searchFilm={searchFilm} preloader={preloaderVisible} notFoundText={notFoundText} moreButton={moreButton} clickMore={clickMore} filterValue={filterValue} onFilterChange={handleChangeFilter} onSaveCard={handleSaveCard} onDeleteCard={handleDeleteCard} />
              <Footer />
            </ProtectedRoute>
            <ProtectedRoute path="/profile" loggedIn={loggedIn}>
              <Header />
              <Profile onSignOut={onSignOut} onUpdateUser={onUpdateUser} errMsg={textErr} />
            </ProtectedRoute>
            {/* <ProtectedRoute path="/profile_edit" loggedIn={loggedIn}>
              <Header />
              <Profile onSignOut={onSignOut} />
            </ProtectedRoute> */}
            <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
              <Header onClickSave={headerClickSave} />
              <SavedMovies movies={saveVisuCards} searchFilm={searchFilmSave} preloader={preloaderVisible} notFoundText={notFoundText} onFilterChange={handleChangeFilter} onDeleteCard={handleDeleteCard} />
              <Footer />
            </ProtectedRoute>
            <Route path="/signup">
              <Register onRegister={onRegister} errMsg={textErr} />
            </Route>
            <Route path="/signin">
              <Login onLogin={onLogin} errMsg={textErr} />
            </Route>
            <Route path="*">
              {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/" />}
              <NotFound />
            </Route>
          </Switch>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
