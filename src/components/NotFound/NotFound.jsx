import React from 'react';
import { useHistory } from 'react-router-dom';

function NotFound() {
  const history = useHistory();
  return (
    <div className="notfound">
      <h2 className="notfound__title">404</h2>
      <p className="notfound__text">Страница не найдена</p>
      <button type="button" className="notfound__button" onClick={() => history.goBack()}>
        Назад
      </button>
    </div>
  );
}

export default NotFound;
