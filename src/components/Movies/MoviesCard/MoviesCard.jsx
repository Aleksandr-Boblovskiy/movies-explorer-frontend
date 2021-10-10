/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function MoviesCard({ movie, onSaveCard, onDeleteCard }) {
  // const [saveCard, setSaveCard] = useState(false);

  function handleCardSave() {
    if (!movie.save) {
      onSaveCard(movie);
    } else {
      onDeleteCard(movie);
    }
    // setSaveCard(!saveCard);
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
        <button className={movie.save ? 'card__save card__save_active' : 'card__save'} type="button" aria-label="save" onClick={handleCardSave} />
      </div>
      <img className="card__image" src={movie.image} alt={movie.nameRU} />
    </li>
  );
}

MoviesCard.propTypes = {
  movie: PropTypes.instanceOf(Object).isRequired,
};

export default MoviesCard;
