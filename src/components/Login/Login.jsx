/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Login({ onLogin }) {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const { target } = event;
    const { name } = target;
    const { value } = target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  function handleSubmit(evt) {
    evt.preventDefault();
    if (isValid) {
      onLogin(values);
      resetForm();
    }
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
          <input type="email" name="email" className="login__input" onChange={handleChange} required />
          <div className="login__line" />
          <span className="login__error">{errors.email}</span>
          <p className="login__name">Пароль</p>
          <input type="password" name="password" minLength="8" className="login__input" onChange={handleChange} required />
          <div className="login__line" />
          <span className="login__error">{errors.password}</span>
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
