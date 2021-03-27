import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/menuTopAdmin.css';

export default function MenuTopAdmin() {
  return (
    <div>
      <h1 data-testid="top-title">Trybeer</h1>
      <div className="admin-side-bar-container">
        <nav>
          <div>
            <Link
              to="/admin/orders"
              data-testid="side-menu-item-orders"
            >
              Meus Pedidos
            </Link>
            <Link
              to="/admin/profile"
              data-testid="side-menu-item-profile"
            >
              Meu Perfil
            </Link>
            <Link
              to="/login"
              data-testid="side-menu-item-logout"
            >
              Sair
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
