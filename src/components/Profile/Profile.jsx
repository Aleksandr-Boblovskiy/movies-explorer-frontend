/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setValues({
      email: currentUser.email,
      name: currentUser.name,
    });
  }, [currentUser]);

  const handleChange = (event) => {
    const { target } = event;
    const { name } = target;
    const { value } = target;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    if (name === 'name') {
      const regex = /^[A-Za-z -]+$/;
      if (!regex.test(value)) {
        setErrors({ ...errors, [name]: 'Поле Имя должно содержать только латиницу, кириллицу, пробел или дефис' });
        setIsValid(false);
        return;
      }
    }
    if (name === 'email') {
      const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      if (!regex.test(value)) {
        setErrors({ ...errors, [name]: 'Поле email должно соответсвовать шаблону электронной почты' });
        setIsValid(false);
        return;
      }
    }
    if (name === 'name' && value === currentUser.name) {
      if (values.email === currentUser.email) {
        setIsValid(false);
        return;
      }
    }
    if (name === 'email' && value === currentUser.email) {
      if (values.name === currentUser.name) {
        setIsValid(false);
        return;
      }
    }
    setIsValid(target.closest('form').checkValidity());
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      props.onUpdateUser(values);
      setIsValid(false);
    }
  }

  return (
    <section className="profile">
      <h2 className="profile__title">{`Привет, ${values.name}!`}</h2>
      <form className="profile__form" autoComplete="off" onSubmit={handleSubmit}>
        <div className="profile__cont">
          <p className="profile__name">
            Имя
          </p>
          <input className="profile__input" minLength="2" value={values.name} type="text" name="name" id="name" autoComplete="off" onChange={handleChange} required />
        </div>
        <span className="profile__error">{errors.name}</span>
        <div className="profile__line" />
        <div className="profile__cont">
          <p className="profile__name">
            E-mail
          </p>
          <input className="profile__input" type="email" value={values.email} name="email" id="email" autoComplete="off" onChange={handleChange} required />
          <span className="profile__error">{errors.email}</span>
        </div>
        <p className={`profile__serverror ${props.errMsg === 'Данные пользователя успешно обновлены.' ? 'profile__serverror_green' : ''}`}>{props.errMsg}</p>
        <Switch>
          <Route path="/profile" exact>
            <button className={isValid ? 'profile__button profile__button_save' : 'profile__button profile__button_save profile__button_disabled'} disabled={!isValid} type="submit">Сохранить</button>
            <Link to="/" className="profile__link">
              <button className="profile__button profile__button_red" type="button" onClick={props.onSignOut}>Выйти из аккаунта</button>
            </Link>
          </Route>
        </Switch>

      </form>
    </section>
  );
}

export default Profile;
