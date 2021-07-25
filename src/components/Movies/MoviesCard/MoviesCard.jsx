import React from 'react';
import PropTypes from 'prop-types';

function MoviesCard({ movie }) {
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
        <button className="card__save" type="button" aria-label="save" />
      </div>
      <img className="card__image" src={`https://api.nomoreparties.co${movie.image.url}`} alt={movie.image.name} />
    </li>
  );
}

MoviesCard.propTypes = {
  movie: PropTypes.instanceOf(Object).isRequired,
};

export default MoviesCard;
