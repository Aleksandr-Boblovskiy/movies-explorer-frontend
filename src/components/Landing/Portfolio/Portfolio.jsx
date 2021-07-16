import React from 'react';
import arrow from '../../../images/arrow.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <h5 className="portfolio__title">Портфолио</h5>
      <a className="portfolio__link" href="#3">
        <p className="portfolio__text">Статичный сайт</p>
        <img src={arrow} alt="Стрелка" />
      </a>
      <div className="portfolio__line" />
      <a className="portfolio__link" href="#3">
        <p className="portfolio__text">Адаптивный сайт</p>
        <img src={arrow} alt="Стрелка" />
      </a>
      <div className="portfolio__line" />
      <a className="portfolio__link" href="#3">
        <p className="portfolio__text">Одностраничное приложение</p>
        <img src={arrow} alt="Стрелка" />
      </a>
    </section>
  );
}

export default Portfolio;
