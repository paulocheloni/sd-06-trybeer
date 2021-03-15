import React from 'react';
import propTypes from 'prop-types';
import hamburguerIcon from '../icons/hamburguer-icon.png';

export default function TopMenu({ pageTitle }) {
  return (
    <div className="top-menu-container">
      <header>
        <button
          className="btn-side-bar"
          src={ hamburguerIcon }
          type="button"
          data-testid="top-hamburguer"
          width="200px"
        >
          <img alt="side-bar menu" />
        </button>
        <h1 data-testid="top-title" className="page-title">{ pageTitle }</h1>
      </header>
    </div>
  );
}

TopMenu.propTypes = {
  pageTitle: propTypes.string.isRequired,
};
