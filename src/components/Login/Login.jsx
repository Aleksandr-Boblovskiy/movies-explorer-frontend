/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Login({ onLogin }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin({ email, password });
  }

  return (
    <section className="login">
      <div className="login__cont">
        <Link to="/">
          <img className="login__logo" src={logo} alt="Логотип фильмы" />
        </Link>
        <form className="login__form" onSubmit={handleSubmit}>
          <h2 className="login__title">Рады видеть!</h2>
          <p className="login__name">E-mail</p>
          <input type="email" className="login__input" onChange={handleEmailChange} required />
          <div className="login__line" />
          <span className="login__error"> Что-то пошло не так...</span>
          <p className="login__name">Пароль</p>
          <input type="password" className="login__input" onChange={handlePasswordChange} required />
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
