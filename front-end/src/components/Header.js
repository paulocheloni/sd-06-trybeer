import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ToogleMenu from './ToogleMenu';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  toogleInOut() {
    const toogleMenuContainer = document.querySelector('.side-menu-container');
    const buttonsDiv = document.querySelector('.buttons-div');
    if (buttonsDiv.style.display === '') {
      buttonsDiv.style.display = 'flex';
    } else {
      buttonsDiv.style.display = '';
    }
    if (toogleMenuContainer.style.display === '') {
      toogleMenuContainer.style.display = 'flex';
    } else {
      toogleMenuContainer.style.display = '';
    }
  }

  render() {
    const { history } = this.props;
    return (
      <header className="globalheader-container">
        <div className="h1-div">
          <h1 data-testid="top-title">TryBeer</h1>
          <button
            type="button"
            className="toogle-button"
            data-testid="top-hamburguer"
            onClick={ this.toogleInOut }
          >
            <i className="fas fa-bars" />
          </button>
        </div>
        <ToogleMenu history={ history } />
      </header>
    );
  }
}

Header.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default connect(null, null)(Header);
