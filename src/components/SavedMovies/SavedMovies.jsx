import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function SavedMovies({ movies }) {
  return (
    <section>
      <div className="movies__cont">
        <SearchForm />
        <div className="movies__line" />
        <MoviesCardList movies={movies} />
      </div>
    </section>
  );
}

SavedMovies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default SavedMovies;
