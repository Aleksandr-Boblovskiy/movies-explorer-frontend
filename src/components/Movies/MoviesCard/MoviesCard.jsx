import React, { useState } from 'react';
import PropTypes from 'prop-types';

function MoviesCard({ movie }) {
  const [saveCard, setSaveCard] = useState(false);

  function handleCardSave() {
    setSaveCard(!saveCard);
  }

  return (
    <li className="card">
      <div className="card__cont">
        <div className="card__name-cont">
          <h3 className="card__name">
            {movie.nameRU}
          </h3>
          <p className="card__duration">
            {`${movie.duration} `}
            мин
          </p>
        </div>
        <button className={saveCard ? 'card__save card__save_active' : 'card__save'} type="button" aria-label="save" onClick={handleCardSave} />
      </div>
      <img className="card__image" src={`https://api.nomoreparties.co${movie.image.url}`} alt={movie.image.name} />
    </li>
  );
}

MoviesCard.propTypes = {
  movie: PropTypes.instanceOf(Object).isRequired,
};

export default MoviesCard;
