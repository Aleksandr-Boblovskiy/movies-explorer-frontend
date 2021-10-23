/* eslint-disable react/prop-types */
import React from 'react';

function FilterCheckbox({ filterValue, onFilterChange }) {
  return (
    <label className="checkbox" htmlFor="short">
      <input className="checkbox__input" type="checkbox" id="short" checked={filterValue} onChange={onFilterChange} />
      <div className="checkbox__icon" />
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
