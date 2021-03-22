import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SideBar from './SideBar';

function TopBar({ name }) {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <button
        type="button"
        data-testid="top-hamburguer"
        onClick={ () => setVisible(!visible) }
      >
        Menu
      </button>
      <div hidden={ visible }>
        <SideBar />
      </div>
      <h1 data-testid="top-title">{name}</h1>
    </div>
  );
}

TopBar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TopBar;
