import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as FaIcons from 'react-icons/fa';
import SideBarMenu from './SideBarMenu';

function TopBar(props) {
  const { title } = props;
  const [sidebar, setSidebar] = useState(false);
  return (
    <header className="w-full bg-black flex">
      { sidebar && <SideBarMenu /> }
      <button
        type="button"
        data-testid="top-hamburguer"
        onClick={ () => setSidebar(!sidebar) }
        className="bg-gray-200 h-12 w-12"
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
