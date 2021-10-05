/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Register({ onRegister }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({ email, password, name });
  }

  return (
    <section className="register">
      <div className="register__cont">
        <Link to="/">
          <img className="register__logo" src={logo} alt="Логотип фильмы" />
        </Link>
        <form className="register__form" onSubmit={handleSubmit}>
          <h2 className="register__title">Добро пожаловать!</h2>
          <p className="register__name">Имя</p>
          <input type="text" className="register__input" onChange={handleNameChange} required />
          <div className="register__line" />
          <span className="register__error">Что-то пошло не так...</span>
          <p className="register__name">E-mail</p>
          <input type="email" className="register__input" onChange={handleEmailChange} required />
          <div className="register__line" />
          <span className="register__error"> Что-то пошло не так...</span>
          <p className="register__name">Пароль</p>
          <input type="password" className="register__input" onChange={handlePasswordChange} required />
          <div className="register__line" />
          <span className="register__error"> Что-то пошло не так...</span>
          <button type="submit" className="register__button">Зарегистрироваться</button>
          <p className="register__text">
            Уже зарегистрированы?
            <Link className="register__link" to="/signin">
              Войти
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Register;
