import React from 'react';
import PropTypes from 'prop-types';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IconContext } from 'react-icons';

const TopMenu = (props) => {
  const {
    titleMenu = 'TryBeer',
  } = props;

  return (
    <header>
      <i data-testid="top-hamburguer">
        <IconContext.Provider value={ { size: '3em' } }>
          <GiHamburgerMenu />
        </IconContext.Provider>
      </i>
      <p data-testid="top-title">{titleMenu}</p>
      <p />
    </header>
  );
};

TopMenu.propTypes = {
  titleMenu: PropTypes.string.isRequired,
};

export default TopMenu;
