import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SideBar from '../Sidebar/Sidebar';
import './Header.css';

export default function Header({ title, user }) {
  return (
    <div className="header">
      <button type="button" className="menu-btn" data-testid="top-hamburguer" >
        <FontAwesomeIcon icon={ faBars } size="lg"/>
      </button>
      <h1 className="title" data-testid="top-title">{ title } </h1>
      <SideBar user={user} />
    </div>
  );
}
