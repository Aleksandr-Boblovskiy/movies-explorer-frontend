import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Login() {
  return (
    <section className="login">
      <div className="login__cont">
        <Link to="/">
          <img className="login__logo" src={logo} alt="Логотип фильмы" />
        </Link>
        <form className="login__form">
          <h2 className="login__title">Рады видеть!</h2>
          <p className="login__name">E-mail</p>
          <input type="text" className="login__input" />
          <div className="login__line" />
          <span className="login__error"> Что-то пошло не так...</span>
          <p className="login__name">Пароль</p>
          <input type="text" className="login__input" />
          <div className="login__line" />
          <span className="login__error"> Что-то пошло не так...</span>
          <button type="submit" className="login__button">Войти</button>
          <p className="login__text">
            Уже зарегистрированы?
            <Link className="login__link" to="/signup">
              Регистрация
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
