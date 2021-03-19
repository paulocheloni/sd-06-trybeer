import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SideBar from './Sidebar';
import '../styles/topbar.css'

function TopBar({ name }) {
  const [visible, setVisible] = useState(true);

  function applyClass() {
    document.getElementById('menuhamburguer').classList.toggle('change');
  }

  return (
    <div>
      <div className="topbar">
        <div
          id="menuhamburguer"
          data-testid="top-hamburguer"
          class="container"
          onClick={ () => { setVisible(!visible); applyClass() } }
        >
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
        <h1 data-testid="top-title" className="title">{name}</h1>
      </div>
        <div hidden={ visible }>
          <SideBar />
        </div>
    </div>
  );
}

TopBar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TopBar;
