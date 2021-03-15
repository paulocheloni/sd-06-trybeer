import React from 'react';

export default function Sidebar() {
  return (
    <section className="side-menu-container">
      <button type="button" data-testid="side-menu-item-products">
        Produtos
      </button>
      <button type="button" data-testid="side-menu-item-my-orders">
        Meus pedidos
      </button>
      <button type="button" data-testid="side-menu-item-my-profile">
        Meu perfil
      </button>
      <button type="button" data-testid="side-menu-item-logout">
        Sair
      </button>
    </section>
  );
}
