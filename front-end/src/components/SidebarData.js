import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as ImIcons from 'react-icons/im';

const SidebarData = [
  {
    label: 'Produtos',
    path: '/products',
    icon: <FaIcons.FaBeer />,
    id: 'side-menu-item-products',
  },
  {
    label: 'Meus Pedidos',
    path: '/orders',
    icon: <FaIcons.FaCartPlus />,
    id: 'side-menu-item-my-orders',
  },
  {
    label: 'Meu Perfil',
    path: '/profile',
    icon: <ImIcons.ImProfile />,
    id: 'side-menu-item-my-profile',
  },
];

export default SidebarData;
