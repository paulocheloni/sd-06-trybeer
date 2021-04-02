import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SidebarData from './SidebarData';
import './Navbar.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <div className="navbar">
        <FaIcons.FaBars
          className="menu-bars"
          data-testid="top-hamburguer"
          onClick={ showSidebar }
        />
        <h1 data-testid="top-title" className="top-title">TryBeer</h1>
      </div>

      <nav className={ sidebar ? 'nav-menu active' : 'nav-menu' }>
        {/* <ul className="nav-menu-items"> */}
        <ul className="side-menu-container">
          <div className="work-around" />
          {SidebarData.map((item, index) => (
            <li key={ index } className={ item.cName } data-testid={ item.id }>
              <Link to={ item.path }>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

    </div>

  );
}

export default Navbar;
