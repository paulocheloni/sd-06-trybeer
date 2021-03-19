import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import './MenuTop.css';
import PropTypes from 'prop-types';
import Menuside from './MenuSide';

function MenuTop({ title }) {
  const [open, setOpen] = useState(false);
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
      {open && <Menuside />}
    </div>
  );
}

export default MenuTop;
MenuTop.propTypes = {
  title: PropTypes.string.isRequired,
};
