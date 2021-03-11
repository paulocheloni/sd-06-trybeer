import React from 'react';
import Header from '../components/HeaderComponent'

function SideBar({ text }) {
  return (
    <>
      <Header text="TryBeer" data-testid="top-title"/>
      <button 
        type="button" 
        data-testid="side-menu-item-products"
      >
        Produtos
      </button>
      <button 
        type="button" 
        data-testid="side-menu-item-my-orders"
      >
        Meus pedidos
      </button>
      <button 
        type="button"
        data-testid="side-menu-item-my-profile"
      >
        Meu Perfil
      </button>
      <button
        type="button"
        data-testid="side-menu-item-logout"
      >
        Meu Perfil
      </button>
    </>
  )
};

export default SideBar;
