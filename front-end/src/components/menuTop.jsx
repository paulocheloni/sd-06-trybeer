import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IconContext } from 'react-icons';

function menuTop() {
  return (
    <header>
      <button type="button" onClick>
        <i data-testid="top-hamburguer">
          <IconContext.Provider>
            <GiHamburgerMenu />
          </IconContext.Provider>
        </i>
      </button>
      <h1 data-testid="top-title"> TryBeer </h1>
    </header>
  );
}

export default menuTop;
