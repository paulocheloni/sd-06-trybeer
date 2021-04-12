import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import { LinkElement } from './index';
import { DivNavContainer, DivNavContent } from './styled-components';
import SidebarData from './SidebarData';

const Navbar = () => {
  const { sidebar, setSidebar } = useContext(UserContext);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <DivNavContainer
      style={ sidebar ? { width: '100%' } : { width: '0%' } }
    >
      <DivNavContent className="side-menu-container">
        {
          SidebarData.map((link, index) => (
            <LinkElement
              key={ index }
              id={ link.id }
              label={ link.label }
              to={ link.path }
              onClick={ showSidebar }
            />
          ))
        }
      </DivNavContent>
    </DivNavContainer>
  );
};

export default Navbar;
