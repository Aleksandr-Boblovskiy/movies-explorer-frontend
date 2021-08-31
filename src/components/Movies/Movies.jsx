import React from 'react';
import PropTypes from 'prop-types';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';

function Movies({ movies }) {
  return (
    <section>
      <div className="movies__cont">
        <SearchForm />
        <div className="movies__line" />
        <MoviesCardList movies={movies} />
        <button className="movies__more" type="button">Еще</button>
      </div>
    </section>
  );
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Movies;
