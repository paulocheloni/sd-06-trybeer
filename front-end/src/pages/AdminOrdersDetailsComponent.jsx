import React from 'react';
import {
  // AdminDetailsOrdersCards,
  SideBarAdmin,
} from '../components';

function AdminOrdersDetailsPage() {
  return (
    <div className="admin_orders_details">
      <SideBarAdmin />
      {/* {"AdminOrders".map((element, index) => (
        <div key={ index }>
          <AdminDetailsOrdersCards
            element={ element }
            index={ index }
          />
        </div>
      ))} */}
      <button type="button">Marcar como entregue</button>
    </div>
  );
}

export default AdminOrdersDetailsPage;
