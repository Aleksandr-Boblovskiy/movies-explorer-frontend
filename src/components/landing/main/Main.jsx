import React from 'react';
import AboutProject from '../AboutProject/AboutProject';
import NavTab from '../NavTab/NavTab';
import Promo from '../Promo/Promo';

function Main() {
  return (
    <main>
      <Promo />
      <NavTab />
      <AboutProject />
    </main>
  );
}

export default Main;
