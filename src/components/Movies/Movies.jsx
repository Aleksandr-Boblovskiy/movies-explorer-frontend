import React from 'react';
import SearchForm from './SearchForm/SearchForm';

function Movies() {
  return (
    <section>
      <div className="movies__cont">
        <SearchForm />
        <div className="movies__line" />
      </div>
    </section>
  );
}

export default Movies;
