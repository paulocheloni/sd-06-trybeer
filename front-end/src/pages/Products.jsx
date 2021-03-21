import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ControllerHeader from '../components/ControllerHeader';
import Card from '../components/Card';
import ShowCart from '../components/ShowCart';

import { getProducts } from '../api/index';
import { tokenExists } from '../services/index';

function Products() {
  const [products, setProducts] = useState(false);
  const history = useHistory();
  const [cartTotal, setCartTotal] = useState(0);
  // calculateTotal(getItensStorage(), products)

  useEffect(() => {
    tokenExists(history);
    getProducts(setProducts);
  }, [history]);

  // useEffect(() => {
  //   if (JSON.parse(quantityStorage) !== null) {
  //     const obj = JSON.parse(quantityStorage)
  //     setQuantity(obj.total);
  //   }
  // }, [quantityStorage]);

  return (
    <div>
      <ControllerHeader />
      { products && products
        .map((prod, index) => (<Card
          key={ prod.id }
          product={ prod }
          setTotal={ setCartTotal }
          index = { index }
        />
        ))}
      <button type="button" onClick={ () => console.log(products) }>Console</button>
      <ShowCart total={ cartTotal } />
    </div>
  );
}

export default Products;
