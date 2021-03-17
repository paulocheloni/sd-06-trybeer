import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import './menuTop.css';
import PropTypes from 'prop-types';
import MenuSide from './menuSide';

function MenuTop({ title }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="top">
      <button
        type="button"
        onClick={ () => setOpen(!open) }
      >
        <i data-testid="top-hamburguer">
          <GiHamburgerMenu />
        </i>
      </button>
      <h1 className="title" data-testid="top-title">
        { title }
      </h1>
      <MenuSide hidden={ open } />
    </div>
  );
}

export default MenuTop;
MenuTop.propTypes = {
  title: PropTypes.string.isRequired,
};
