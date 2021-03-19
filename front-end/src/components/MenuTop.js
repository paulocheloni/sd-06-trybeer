import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SideBar from './SideBar';

function MenuTop(props) {
  const [showSideBar, setShowSideBar] = useState(false);
  const { title } = props;

  return (
    <div>
      <nav className="top-bar">
        <i
          onClick={ () => (showSideBar ? setShowSideBar(false) : setShowSideBar(true)) }
          aria-hidden="true"
          className="fas fa-bars"
          data-testid="top-hamburguer"
        />
        <h1 data-testid="top-title">{ title }</h1>
      </nav>
      <aside>
        {showSideBar && <SideBar />}
      </aside>
    </div>
  );
}

MenuTop.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MenuTop;