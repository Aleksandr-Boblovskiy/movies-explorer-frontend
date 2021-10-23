/* eslint-disable react/prop-types */
import React from 'react';
import find from '../../../images/find.svg';
import findButton from '../../../images/find_submt.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSearch, filterValue, onFilterChange }) {
  const [search, setSearch] = React.useState('');
  const [errorText, setErrorText] = React.useState('');

  function handleChangeSearch(e) {
    setSearch(e.target.value);
    setErrorText('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrorText('');
    let str = search;
    str = str.trim();
    if (str === '') {
      setErrorText('Нужно ввести ключевое слово');
    } else {
      onSearch(search);
    }
  }

  return (
    <section className="search">
      <form className="search__form" autoComplete="off" onSubmit={handleSubmit}>
        <div className="search__cont">
          <div className="search__name-cont">
            <img src={find} alt="Найти" className="search__image" />
            <input type="text" name="movie-search" id="movie-search" className="search__text" placeholder="Фильм" value={search} onChange={handleChangeSearch} />
            <button className="search__button" type="submit">
              <img className="search__image-find" src={findButton} alt="Найти" />
            </button>
          </div>
          <div className="search__line" />
          <FilterCheckbox filterValue={filterValue} onFilterChange={onFilterChange} />
        </div>
      </form>
      <span className="search__error">{errorText}</span>
    </section>
  );
}

export default SearchForm;
