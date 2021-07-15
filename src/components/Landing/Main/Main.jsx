import React from 'react';
import AboutProject from '../AboutProject/AboutProject';
import NavTab from '../NavTab/NavTab';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';

function Main() {
  return (
    <main>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
    </main>
  );
}

export default Main;
