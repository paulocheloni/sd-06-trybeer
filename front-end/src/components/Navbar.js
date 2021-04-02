import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import SidebarData from './SidebarData';
import './Navbar.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [pathnameTitle, setPathnamerTitle] = useState('TryBeer');

  const showSidebar = () => setSidebar(!sidebar);

  const history = useHistory();
  const { pathname } = history.location;

  useEffect(() => {
    const header = document.getSelection('top-title');
    if (pathname === '/profile') {
      header.innerHTML = 'Meu perfil';
      setPathnamerTitle(header.innerHTML);
    }
    if (pathname === '/admin/profile') {
      header.innerHTML = 'Admin - Meu Perfil';
      setPathnamerTitle(header.innerHTML);
    }
    if (pathname === '/checkout') {
      header.innerHTML = 'Finalizar Pedido';
      setPathnamerTitle(header.innerHTML);
    }
    if (pathname === '/orders') {
      header.innerHTML = 'Meus Pedidos';
      setPathnamerTitle(header.innerHTML);
    }
  }, [pathname]);

  return (
    <div>
      <div className="navbar">
        <FaIcons.FaBars
          className="menu-bars"
          data-testid="top-hamburguer"
          onClick={ showSidebar }
        />
        <h1 data-testid="top-title" className="top-title">{pathnameTitle}</h1>
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
