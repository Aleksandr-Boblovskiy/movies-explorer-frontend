import React from 'react';
import PropTypes from 'prop-types';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies }) {
  return (
    <section className="movieslist">
      <ul className="movieslist__cont">
        {
          movies.map((movie) => <MoviesCard movie={movie} key={movie.id} />)
        }
      </ul>
    </section>
  );
}

MoviesCardList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default MoviesCardList;
