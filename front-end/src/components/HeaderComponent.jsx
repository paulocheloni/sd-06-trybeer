import React from 'react';
import SideBar from './SideBarComponent';
import '../style/HeaderCostumer.css';

function Header({ text, id }) {
  return(
    <div className='header_costumer'>
      <div className='dropdown'>
        <button
          type="button"
          id="fome-hamburger"
          name="McDonalds"
          className='bttn-menu-costumer'
        >
          <img src={require('../images/hamburguer.png')} className='img-menu-costumer' />
        </button>
        <div className='dropdown-content'>
          <SideBar text='TryBeer' id='top-title' />
        </div>
      </div>
      <h1 data-testid={id} className='title'>{text}</h1>
      <img src={require('../images/logo_provisorio.png')} className='img-logo' />
    </div>
  )
};

export default Header;
