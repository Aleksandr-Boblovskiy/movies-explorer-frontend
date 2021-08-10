import React from 'react';
import arrow from '../../../images/arrow.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <h5 className="portfolio__title">Портфолио</h5>
      <a className="portfolio__link" href="https://github.com/Aleksandr-Boblovskiy/how-to-learn" rel="noreferrer" target="_blank">
        <p className="portfolio__text">Статичный сайт</p>
        <img src={arrow} alt="Стрелка" />
      </a>
      <div className="portfolio__line" />
      <a className="portfolio__link" href="https://aleksandr-boblovskiy.github.io/russian-travel/" rel="noreferrer" target="_blank">
        <p className="portfolio__text">Адаптивный сайт</p>
        <img src={arrow} alt="Стрелка" />
      </a>
      <div className="portfolio__line" />
      <a className="portfolio__link" href="https://github.com/Aleksandr-Boblovskiy/express-mesto" rel="noreferrer" target="_blank">
        <p className="portfolio__text">Одностраничное приложение</p>
        <img src={arrow} alt="Стрелка" />
      </a>
    </section>
  );
}

export default Portfolio;
