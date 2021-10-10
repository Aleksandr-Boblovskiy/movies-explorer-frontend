/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';

function Movies({
  movies, searchFilm, preloader, notFoundText, moreButton, clickMore, filterValue, onFilterChange,
  onSaveCard, onDeleteCard,
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
        <MoviesCardList movies={movies} onSaveCard={onSaveCard} onDeleteCard={onDeleteCard} />
        <button className={`movies__more ${moreButton ? 'movies__more_active' : ''}`} type="button" onClick={clickMore}>Еще</button>
      </div>
    </section>
  );
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Movies;
