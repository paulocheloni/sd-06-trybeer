import React from 'react';
import SidebarMenu from '../components/SideBarMenu';
import TopMenu from '../components/TopMenu';

function Orders() {
  return (
    <div>
      <TopMenu />
      <SidebarMenu />
      <div className="content-panel">
        <p>Order</p>
      </div>
    </div>
  );
}

export default Orders;
