import React from 'react';

function FilterCheckbox() {
  const [value, setValue] = React.useState(false);

  function handleChange(e) {
    setValue(e.target.checked);
  }

  return (
    <label className="checkbox" htmlFor="short">
      <input className="checkbox__input" type="checkbox" id="short" checked={value} onChange={handleChange} />
      <div className="checkbox__icon" />
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
