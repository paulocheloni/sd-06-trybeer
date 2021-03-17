import React, { useState } from 'react';
import MenuBar from './MenuBar';
import Header from './Header';

function ControllerHeader() {
  const [viewMenu, setViewMenu] = useState(false);
  return (
    <div>
      <button 
        data-testid="top-hamburguer"
        type="button"
        onClick={ () =>setViewMenu(!viewMenu) }
      >
        ☰
      </button>
      <Header/>
      { viewMenu && <MenuBar setViewMenu={ setViewMenu } /> }
    </div>
  );
}

export default ControllerHeader;
