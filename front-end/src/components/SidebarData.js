import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as ImIcons from 'react-icons/im';

const SidebarData = [
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaBeer />,
    cName: 'nav-text',
    id: 'side-menu-item-products',
  },
  {
    title: 'Meus Pedidos',
    path: '/orders',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',
    id: 'side-menu-item-my-orders',
  },
  {
    title: 'Meu Perfil',
    path: '/profile',
    icon: <ImIcons.ImProfile />,
    cName: 'nav-text',
    id: 'side-menu-item-my-profile',
  },
  {
    title: 'Sair',
    path: '/login',
    icon: <AiIcons.AiOutlineLogout />,
    cName: 'nav-text',
    id: 'side-menu-item-logout',
  },
];

export default SidebarData;
