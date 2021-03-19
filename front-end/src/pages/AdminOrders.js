import React from 'react';
import { Link } from 'react-router-dom';

function AdminOrders() {
  return (
    <div>
      <Link to="/admin/profile">
        <button
          data-testid="side-menu-item-profile"
          type="button"
        >
          Meu Perfil
        </button>
      </Link>
      Admin Orders
    </div>
  );
}

export default AdminOrders;
