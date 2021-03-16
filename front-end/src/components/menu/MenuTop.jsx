import React, { useState } from 'react';
import '../../Menu.css';
import { FiMenu } from 'react-icons/fi'
import MenuSideBar from './MenuSideBar';

function MenuTop({ name }) {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleClick = () => {
    setShowSideBar(!showSideBar);
  }

  return (
    <div>
      <div className="menuTop">
        <span data-testid="top-hamburguer" className="menuIcon" onClick={handleClick}><FiMenu /></span>
        <span data-testid="top-title">{name}</span>
        {showSideBar && <MenuSideBar />}
      </div>
    </div>
  );
}

export default MenuTop;
