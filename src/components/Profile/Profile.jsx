import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form" autoComplete="off">
        <div className="profile__cont">
          <p className="profile__name">
            Имя
          </p>
          <input className="profile__input" type="text" name="name" id="name" required />
        </div>
        <div className="profile__line" />
        <div className="profile__cont">
          <p className="profile__name">
            E-mail
          </p>
          <input className="profile__input" type="email" name="email" id="email" required />
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
