import React from 'react';
import SideBar from './SideBarComponent';

function Header({ text, id }) {
  return(
    <div>
      <h1 data-testid={id}>{text}</h1>
      <button
        type="button"
        id="fome-hamburger"
        name="McDonalds"
      >
        <img src={require('../imgButton/hamburger.png')} />
      </button>
      <SideBar text="TryBeer" id='top-title' />
    </div>
  )
};

export default Header;
