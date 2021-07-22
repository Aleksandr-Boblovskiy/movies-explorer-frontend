import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Landing/Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
            <Footer />
          </Route>
          <Route path="/movies">
            <Movies />
            <Footer />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
