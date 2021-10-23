/* eslint-disable react/prop-types */
import React from 'react';
import './Preloader.css';

const Preloader = ({ active, text }) => (
  <div className={`preloader ${active ? 'preloader_active' : ''}`}>
    <div className={`preloader__container ${text ? '' : 'preloader__container_active'}`}>
      <span className="preloader__round" />
    </div>
    <p className={`preloader__text ${text ? 'preloader__text_active' : ''}`}>Ничего не найдено</p>
  </div>
);

export default Preloader;
