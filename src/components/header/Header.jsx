import React from 'react';
import logo from '../../images/logo.svg';
import { NavLink, Route, Switch } from "react-router-dom";

function Header({ onSignOut }) {
  return (
    <header className="header page__header">
      <img className="header__logo" src={logo} alt="Логотип фильмы" />
      <nav className="header__menu">
        <Switch>
          <Route exact path='/'>
            <nav className='header__user-cont'>
              <NavLink to="/films" className='header__element' >Фильмы</NavLink>
              <NavLink to="/savefilms" className='header__element' >Сохраненные фильмы</NavLink>
              <NavLink to="/accaunt" className='header__element' onClick={onSignOut}>
                <p className='header__element'>Аккаунт</p>
                <img className='header__acc-img' alt='Аккаунт'></img>
              </NavLink>
            </nav>
          </Route>
          <Route path='/signin'>
            <NavLink to="/signup" className='header__auth'>
              Регистрация
            </NavLink>
          </Route>
          <Route path='/signup'>
            <NavLink to='/signin' className='header__auth' >
              Войти
            </NavLink>
          </Route>
        </Switch>
      </nav>
    </header >
  );
}

export default Header;