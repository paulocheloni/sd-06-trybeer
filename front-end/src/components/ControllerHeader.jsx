import React, { useState } from 'react';
import SideBar from './SideBar';
import Header from './Header';
import '../css/ControllerHeader.css';

function ControllerHeader(props) {
  const [viewMenu, setViewMenu] = useState(false);
  return (
    <div className="controllerheader">
      <button
        data-testid="top-hamburguer"
        type="button"
        onClick={ () => setViewMenu(!viewMenu) }
      >
        ☰
      </button>
      <Header title={ props.title } />
      { viewMenu && <SideBar/> }
    </div>
  );
}

export default ControllerHeader;
