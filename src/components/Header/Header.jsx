import React from 'react';
import {
  Link,
  NavLink, Route, Switch, useLocation,
} from 'react-router-dom';
import logo from '../../images/logo.svg';
import account from '../../images/account.svg';

function Header() {
  const { pathname } = useLocation();

  return (
    <header className={`header ${(pathname === ('/')) ? 'header_landing' : ''}`}>
      <Link to="/">
        <img className="header__logo" src={logo} alt="Логотип фильмы" />
      </Link>
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
        <Route exact path="/(movies|saved-movies|profile|profile_edit)">
          <nav className="header__menu">
            <NavLink to="/movies" className="header__element" activeClassName="header__element_active">Фильмы</NavLink>
            <NavLink to="/saved-movies" className="header__element" activeClassName="header__element_active">Сохраненные фильмы</NavLink>
            <NavLink to="/profile" className="header__element" activeClassName="header__element_active">
              <p className="header__element-acc">Аккаунт</p>
              <img className="header__acc-img" alt="Аккаунт" src={account} />
            </NavLink>
          </nav>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
