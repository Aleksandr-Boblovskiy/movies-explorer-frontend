import React from 'react';
import find from '../../../images/find.svg';
import findButton from '../../../images/find_submt.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__cont">
          <img src={find} alt="Найти" className="search__image" />
          <input type="text" name="movie-search" id="movie-search" className="search__text" placeholder="Фильм" />
          <button className="search__button" type="submit">
            <img className="search__image-find" src={findButton} alt="Найти" />
          </button>
          <div className="search__line" />
          <FilterCheckbox />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
