import React from 'react';

function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form">
        <label htmlFor="name">
          Имя
          <input className="profile__name" type="text" name="name" id="name" />
        </label>
        <div className="profile__line" />
        <label htmlFor="email">
          E-mail
          <input className="profile__email" type="email" name="email" id="email" />
        </label>
        <button type="submit">Редактировать</button>
        <button type="button">Выйти из аккаунта</button>
      </form>
    </section>
  );
}

export default Profile;
