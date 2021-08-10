import React from 'react';

function Techs() {
  return (
    <section className="techs" id="techs">
      <div className="techs__cont">
        <h3 className="techs__heading">Технологии</h3>
        <div className="techs__line" />
        <h2 className="tech__title">7 технологий</h2>
        <p className="tech__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="tech__list">
          <li className="tech__element">HTML</li>
          <li className="tech__element">CSS</li>
          <li className="tech__element">JS</li>
          <li className="tech__element">React</li>
          <li className="tech__element">Git</li>
          <li className="tech__element">Express.js</li>
          <li className="tech__element">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
