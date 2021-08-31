import React from 'react';
import photo from '../../../images/student.jpg';

function AboutMe() {
  return (
    <section className="aboutme" id="aboutme">
      <div className="aboutme__cont">
        <h3 className="aboutme__heading">Студент</h3>
        <div className="aboutme__line" />
        <div className="aboutme__profile">
          <div className="aboutme__profile-text">
            <h2 className="aboutme__title">Виталий</h2>
            <p className="aboutme__subtitle">Фронтенд-разработчик, 30 лет</p>
            <p className="aboutme__text">
              Я родился и живу в Саратове, закончил факультет экономики СГУ.
              У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
              Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
              После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами
              и ушёл с постоянной работы.
            </p>
            <ul className="aboutme__links">
              <li><a className="aboutme__link" href="https://www.facebook.com/profile.php?id=100014222889722" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a className="aboutme__link" href="https://github.com/Aleksandr-Boblovskiy" target="_blank" rel="noreferrer">Github</a></li>
            </ul>
          </div>
          <img className="aboutme__photo" src={photo} alt="Фотография студента" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
