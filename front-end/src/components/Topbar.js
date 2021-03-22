import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Sidebar from './Sidebar';

import '../styles/Topbar.css';

export default function Topbar() {
  const [hidden, setHidden] = useState(true);

  const triggerSidebar = () => {
    setHidden(!hidden);
  };

  return (
    <section className="topbar">
      <section className="header">
        <button
          type="button"
          onClick={ triggerSidebar }
          className="hamburguer"
          data-testid="top-hamburguer"
        >
          <FontAwesomeIcon icon={ faBars } className="icon" />
        </button>
        <h1 data-testid="top-title" className="title">TryBeer</h1>
      </section>
      <Sidebar hide={ (hidden) ? 'hide' : 'show' } />
    </section>
  );
}
