import React from 'react';
import ProductsList from '../components/products/ProductsList';
import CheckoutCart from '../components/checkout/CheckoutCart';

import MenuTop from '../components/menu/MenuTop';

function Products() {
  return (
    <div>
      <MenuTop name="TryBeer" />
      <ProductsList />
      <CheckoutCart />
    </div>
  );
}

export default Products;
