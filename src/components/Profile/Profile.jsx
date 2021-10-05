/* eslint-disable react/prop-types */
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();

  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      email,
    });
  }

  return (
    <section className="profile">
      <h2 className="profile__title">{`Привет, ${name}!`}</h2>
      <form className="profile__form" autoComplete="off" onSubmit={handleSubmit}>
        <div className="profile__cont">
          <p className="profile__name">
            Имя
          </p>
          <input className="profile__input" minLength="2" value={name} type="text" name="name" id="name" onChange={handleChangeName} required />
        </div>
        <div className="profile__line" />
        <div className="profile__cont">
          <p className="profile__name">
            E-mail
          </p>
          <input className="profile__input" type="email" value={email} name="email" id="email" onChange={handleChangeEmail} required />
        </div>
        <Switch>
          <Route path="/profile" exact>
            <Link to="/profile_edit" className="profile__link">
              <button className="profile__button" type="submit">Редактировать</button>
            </Link>
            <Link to="/" className="profile__link">
              <button className="profile__button profile__button_red" type="button">Выйти из аккаунта</button>
            </Link>
          </Route>
          <Route path="/profile_edit">
            <button className="profile__button profile__button_save" type="submit">Сохранить</button>
          </Route>
        </Switch>

      </form>
    </section>
  );
}

export default Profile;
