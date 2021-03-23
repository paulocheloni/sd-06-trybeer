import React, { useContext } from 'react';
import TopBar from '../../design-components/TopBar';
import CartButton from '../../design-components/CartButton';
import Card from '../../design-components/Card';
import ContextBeer from '../../context/ContextBeer';

function Products() {
  const {
    sale,
  } = useContext(ContextBeer);

  console.log(sale);

  return (
    <div>
      <TopBar title="TryBeer" />
      <div className="flex flex-wrap p-32">
        {
          sale && sale.map((product, index) => (
            <Card product={ product } testIdNumber={ index } key={ product.id } />
          ))
        }
      </div>
      <CartButton />
    </div>
  );
}

export default Products;
