import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__cont">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__line" />
        <div className="footer__bar">
          <p className="footer__copyright">© 2021</p>
          <nav>
            <ul className="footer__links">
              <li><a className="footer__link" href="#4">Яндекс.Практикум</a></li>
              <li><a className="footer__link" href="#4">Github</a></li>
              <li><a className="footer__link" href="#4">Facebook</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
