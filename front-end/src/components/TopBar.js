import React, { useState } from 'react';
import { GoThreeBars } from 'react-icons/go';
import SideBar from './SideBar';

import './TopBar.css';

function TopBar() {
  const [activeButton, setActiveButton] = useState(false);

  function handleActive() {
    if (activeButton === false) setActiveButton(true);
    if (activeButton === true) setActiveButton(false);
  }

  return (
    <div className="top-bar">
      <header className="header">
        <button
          type="button"
          data-testid="top-hamburguer"
          // src={<GoThreeBars />}
          onClick={ handleActive }
        >
          <GoThreeBars size={ 40 } />
        </button>
        <h1 className="title" data-testid="top-title">TryBeer</h1>
      </header>
      { activeButton === true ? <SideBar /> : null }
    </div>
  );
}

export default TopBar;
