import React from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

export default function SideMenu() {
  return (
    <ProSidebar iconShape="round" className="side-menu-container">
      <Menu>
        <SubMenu>
          <MenuItem data-testid="side-menu-item-products">Produtos</MenuItem>
          <MenuItem data-testid="side-menu-item-my-orders">Meus Pedidos</MenuItem>
          <MenuItem data-testid="side-menu-item-my-profile">Meu Perfil</MenuItem>
          <MenuItem data-testid="side-menu-item-logout">Sair</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
}
