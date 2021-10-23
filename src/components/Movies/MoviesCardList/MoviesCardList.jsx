/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, onSaveCard, onDeleteCard }) {
  return (
    <section className="movieslist">
      <ul className="movieslist__cont">
        {
          movies.map((movie, index) => (
            <MoviesCard
              movie={movie}
              key={index}
              onSaveCard={onSaveCard}
              onDeleteCard={onDeleteCard}
            />
          ))
        }
      </ul>
    </section>
  );
}

MoviesCardList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default MoviesCardList;
