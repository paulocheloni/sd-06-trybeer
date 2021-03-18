import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import './menuTop.css';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import MenuSide from './menuSide';

function MenuTop({ title }) {
  const user = JSON.parse(localStorage.getItem('user'));
  let isAdmin = false;
  if (user.role && user.role === 'administrator') {
    isAdmin = true;
  }
  try {
    const [open, setOpen] = useState(isAdmin);// true para passar no adminprofile
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
        { open && <MenuSide title="Trybeer" /> }
      </div>
    );
  } catch (err) {
    return <Redirect to="/login" />;
  }
}

export default MenuTop;

MenuTop.propTypes = {
  title: PropTypes.string.isRequired,
};
