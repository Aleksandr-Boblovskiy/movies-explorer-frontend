import React from 'react';
import find from '../../../images/find.svg';
import findButton from '../../../images/find_submt.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form" autoComplete="off">
        <div className="search__cont">
          <div className="search__name-cont">
            <img src={find} alt="Найти" className="search__image" />
            <input type="text" name="movie-search" id="movie-search" className="search__text" placeholder="Фильм" required />
            <button className="search__button" type="submit">
              <img className="search__image-find" src={findButton} alt="Найти" />
            </button>
          </div>
          <div className="search__line" />
          <FilterCheckbox />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
