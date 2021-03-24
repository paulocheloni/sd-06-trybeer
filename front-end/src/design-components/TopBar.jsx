import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as FaIcons from 'react-icons/fa';
import SideBarMenu from './SideBarMenu';

function TopBar(props) {
  const { title } = props;
  const [sidebar, setSidebar] = useState(false);
  return (
    <header className="relative w-full bg-black flex">
      <SideBarMenu visible={ sidebar } />
      <button
        type="button"
        data-testid="top-hamburguer"
        onClick={ () => setSidebar(!sidebar) }
        className="bg-gray-200 h-12 w-12 flex justify-center items-center"
      >
        <FaIcons.FaBars />
      </button>
      <h1 data-testid="top-title" className="text-center flex-grow text-white text-2xl">
        {title}
      </h1>
    </header>
  );
}

TopBar.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default TopBar;
