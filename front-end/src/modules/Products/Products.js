import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import TopBar from '../../design-components/TopBar';
import CartButton from '../../design-components/CartButton';
import Card from '../../design-components/Card';
import ContextBeer from '../../context/ContextBeer';

function Products() {
  const history = useHistory();
  const {
    sale,
    getUser,
  } = useContext(ContextBeer);

  useEffect(() => {
    const user = getUser();
    if (!user) history.push('/');
  }, [getUser, history]);

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
