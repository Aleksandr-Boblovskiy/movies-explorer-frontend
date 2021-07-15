import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Header() {
  return (
    <header className="header page__header">
      <img className="header__logo" src={logo} alt="Логотип фильмы" />
      <Switch>
        <Route path="/" exact>
          <nav className="header__menu">
            <NavLink to="/signup" className="header__element">
              Регистрация
            </NavLink>
            <NavLink to="/signin" className="header__element header__element_button">
              Войти
            </NavLink>
          </nav>
        </Route>
        <Route exact path="/(movies|saved-movies|profile)">
          <nav className="header__menu">
            <NavLink to="/movies" className="header__element">Фильмы</NavLink>
            <NavLink to="/saved-movies" className="header__element">Сохраненные фильмы</NavLink>
            <NavLink to="/profile" className="header__element">
              <p className="header__element">Аккаунт</p>
              <img className="header__acc-img" alt="Аккаунт" />
            </NavLink>
          </nav>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
