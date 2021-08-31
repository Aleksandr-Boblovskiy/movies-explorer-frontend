import React from 'react';

function NavTab() {
  return (
    <section className="nav">
      <nav className="nav__menu">
        <ul className="nav__list">
          <li><a className="nav__element" href="#about">О проекте</a></li>
          <li><a className="nav__element" href="#techs">Технологии</a></li>
          <li><a className="nav__element" href="#aboutme">Студент</a></li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
