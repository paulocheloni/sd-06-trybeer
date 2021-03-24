import React from 'react';
import PaperContainer from '../../../design-system/containers/PaperContainer';
import Gallery from '../components/Gallery';

const OrdersAdmin = () => (
  <PaperContainer>
    <p className="hidden" data-testid="top-title">Pedidos</p>
    <p>Orders</p>
    <Gallery />
  </PaperContainer>
);

export default OrdersAdmin;
