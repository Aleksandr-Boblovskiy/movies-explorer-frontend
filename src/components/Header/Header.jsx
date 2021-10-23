/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import {
  Link,
  NavLink, Route, Switch, useLocation,
} from 'react-router-dom';
import logo from '../../images/logo.svg';
import account from '../../images/account.svg';
import burgerLogo from '../../images/burger.svg';
import burgerCloseLogo from '../../images/burger_close.svg';

function Header({ onClickSave, loggedIn }) {
  const { pathname } = useLocation();
  const [menuActive, setMenuActive] = useState(false);

  function handeClickSave() {
    onClickSave();
  }

  return (
    <header className={`header ${(pathname === ('/')) ? 'header_landing' : ''}`}>
      <Link to="/">
        <img className="header__logo" src={logo} alt="Логотип фильмы" />
      </Link>
      <Switch>
        <Route path="/" exact>
          {!loggedIn
            ? (
              <nav className="header__menu header__menu_landing">
                <NavLink to="/signup" className="header__element-landing">
                  Регистрация
                </NavLink>
                <NavLink to="/signin" className="header__element-landing header__element-landing_button">
                  Войти
                </NavLink>
              </nav>
            )
            : (
              <nav className="header__menu">
                <NavLink to="/movies" className="header__element" activeClassName="header__element_active">Фильмы</NavLink>
                <NavLink to="/saved-movies" className="header__element" activeClassName="header__element_active" onClick={handeClickSave}>Сохраненные фильмы</NavLink>
                <NavLink to="/profile" className="header__element" activeClassName="header__element_active">
                  <p className="header__element-acc">Аккаунт</p>
                  <img className="header__acc-img" alt="Аккаунт" src={account} />
                </NavLink>
              </nav>
            )}

        </Route>
        <Route exact path="/(movies|saved-movies|profile|profile_edit)">
          <nav className="header__menu">
            <NavLink to="/movies" className="header__element" activeClassName="header__element_active">Фильмы</NavLink>
            <NavLink to="/saved-movies" className="header__element" activeClassName="header__element_active" onClick={handeClickSave}>Сохраненные фильмы</NavLink>
            <NavLink to="/profile" className="header__element" activeClassName="header__element_active">
              <p className="header__element-acc">Аккаунт</p>
              <img className="header__acc-img" alt="Аккаунт" src={account} />
            </NavLink>
          </nav>
          <img className={menuActive ? 'header__burger-logo header__burger-logo_active' : 'header__burger-logo'} src={menuActive ? burgerCloseLogo : burgerLogo} alt="Меню бургер" onClick={() => setMenuActive(!menuActive)} />
          <div className={menuActive ? 'header__burger-cont_active' : 'header__burger-cont'}>
            <nav className="header__burger">
              <NavLink to="/" exact className="header__element" activeClassName="header__element_active">
                Главная
              </NavLink>
              <NavLink
                to="/movies"
                className="header__element"
                activeClassName="header__element_active"
              >
                Фильмы
              </NavLink>
              <NavLink
                to="/saved-movies"
                className="header__element"
                activeClassName="header__element_active"
              >
                Сохраненные фильмы
              </NavLink>
              <NavLink
                to="/profile"
                className="header__element"
                activeClassName="header__element_active"
              >
                <p className="header__element-acc">Аккаунт</p>
                <img className="header__acc-img" alt="Аккаунт" src={account} />
              </NavLink>
            </nav>
          </div>

        </Route>
      </Switch>
    </header>
  );
}

export default Header;
