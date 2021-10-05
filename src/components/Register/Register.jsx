/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Register({ onRegister }) {
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

  // return {
  //   values, handleChange, errors, isValid, resetForm,
  // };

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      onRegister(values);
      resetForm();
    }
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
          <input type="text" name="name" minLength="2" className="register__input" onChange={handleChange} required />
          <div className="register__line" />
          <span className="register__error">{errors.name}</span>
          <p className="register__name">E-mail</p>
          <input type="email" name="email" className="register__input" onChange={handleChange} required />
          <div className="register__line" />
          <span className="register__error">{errors.email}</span>
          <p className="register__name">Пароль</p>
          <input type="password" name="password" minLength="8" className="register__input" onChange={handleChange} required />
          <div className="register__line" />
          <span className="register__error">{errors.password}</span>
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
