import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../Menu.css';
import { FiMenu } from 'react-icons/fi';
import MenuSideBar from './MenuSideBar';

function MenuTop({ name }) {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleClick = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <header>
      <div className="menuTop">
        <button
          type="button"
          className="menuIcon"
          onClick={ handleClick }
        >
          <FiMenu
            data-testid="top-hamburguer"
          />
        </button>
        <span data-testid="top-title">{ name }</span>
        {showSideBar && <MenuSideBar />}
      </div>
    </header>
  );
}

MenuTop.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MenuTop;
