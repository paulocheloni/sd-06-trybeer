import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IconContext } from 'react-icons';

const TopMenu = (props) => {
  const [isVisible, setIsVisible] = useState('hidden');
  const {
    titleMenu = 'TryBeer',
  } = props;
  
  const setVisibility = () => {
    setIsVisible(isVisible === 'hidden' ? 'visible' : 'hidden');
    if (isVisible === 'visible') {
      document.querySelector('.side-menu-container')
        .setAttribute('class', 'side-menu-container isNotVisible');
    } else {
      document.querySelector('.side-menu-container')
        .setAttribute('class', 'side-menu-container isVisible');
    }
  };

  return (
    <header>
      <button type="button" id="side-menu" onClick={ setVisibility }>
        <i data-testid="top-hamburguer">
          <IconContext.Provider value={ { size: '3em' } }>
            <GiHamburgerMenu />
          </IconContext.Provider>
        </i>
      </button>
      <p data-testid="top-title">{ titleMenu }</p>
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
