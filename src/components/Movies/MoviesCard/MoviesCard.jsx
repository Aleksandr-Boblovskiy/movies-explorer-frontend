/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

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

  function handleDeleteCard() {
    onDeleteCard(movie);
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
        <Switch>
          <Route path="/movies">
            <button className={movie.save ? 'card__save card__save_active' : 'card__save'} type="button" aria-label="save" onClick={handleCardSave} />
          </Route>
          <Route path="/saved-movies">
            <button className="card__delete" type="button" aria-label="save" onClick={handleDeleteCard} />
          </Route>
        </Switch>
      </div>
      <img className="card__image" src={movie.image} alt={movie.nameRU} />
    </li>
  );
}

MoviesCard.propTypes = {
  movie: PropTypes.instanceOf(Object).isRequired,
};

export default MoviesCard;
