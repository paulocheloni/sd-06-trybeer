import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as FaIcons from 'react-icons/fa';
import SideBarMenu from './SideBarMenu';

function TopBar(props) {
  const { title } = props;
  const [sidebar, setSidebar] = useState(false);
  return (
    <header className="w-full bg-indigo-800 flex">
      { sidebar && <SideBarMenu /> }
      <button
        type="button"
        data-testid="top-hamburguer"
        onClick={ () => setSidebar(!sidebar) }
        className="bg-indigo-800 h-12 w-12"
      >
        <FaIcons.FaBars />
      </button>
      <h1 data-testid="top-title" className="text-center flex-grow text-indigo-400">
        {title}
      </h1>
    </header>
  );
}

TopBar.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default TopBar;
