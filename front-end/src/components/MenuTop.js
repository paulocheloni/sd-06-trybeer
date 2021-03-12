import React, { useState } from 'react';
import SideBar from './SideBar';

function MenuTop (props) {
  const [showSideBar, setShowSideBar] = useState(false);
  const { title } = props;

  return (
    <div>
      <nav>
        <i
          onClick={() => showSideBar ? setShowSideBar(false) : setShowSideBar(true)}
          class="fas fa-bars"
          data-testid="top-hamburguer"
        />
        <h1 data-testid="top-title">{ title }</h1>
      </nav>
      <aside>
        {showSideBar && <SideBar className="side-menu-container"/>}      
      </aside>
    </div>
  );
}

export default MenuTop;