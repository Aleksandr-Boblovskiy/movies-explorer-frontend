import React from 'react';

function AboutProject() {
  return (
    <section className="about">
      <div className="about__cont">
        <h3 className="about__heading">О проекте</h3>
        <div className="about__line" />
        <div className="about__text-cont">
          <h4 className="about__title">Дипломный проект включал 5 этапов</h4>
          <h4 className="about__title">На выполнение диплома ушло 5 недель</h4>
          <p className="about__text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности
            и финальные доработки.
          </p>
          <p className="about__text">
            У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
        <div className="about__time-cont">
          <p className="about__element about__element_one-week">1 неделя</p>
          <p className="about__element about__element_four-week">4 недели</p>
          <p className="about__element">Back-end</p>
          <p className="about__element">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
