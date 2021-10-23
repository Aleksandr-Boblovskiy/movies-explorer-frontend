/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies({
  movies, searchFilm, preloader, notFoundText, filterValue, onFilterChange, onDeleteCard,
}) {
  return (
    <section>
      <div className="movies__cont">
        <SearchForm
          onSearch={searchFilm}
          filterValue={filterValue}
          onFilterChange={onFilterChange}
        />
        <div className="movies__line" />
        <Preloader active={preloader} text={notFoundText} />
        <MoviesCardList movies={movies} onDeleteCard={onDeleteCard} />
      </div>
    </section>
  );
}

SavedMovies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default SavedMovies;
