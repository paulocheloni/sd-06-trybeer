import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ControllerHeader from '../components/ControllerHeader';
import Card from '../components/Card';
import ShowCart from '../components/ShowCart';
import { getProducts } from '../api/index';
import { tokenExists } from '../services/index';
import '../css/Products.css';

function Products() {
  const [products, setProducts] = useState(false);
  const history = useHistory();
  const [cartTotal, setCartTotal] = useState(localStorage.getItem('total'));

  useEffect(() => {
    tokenExists(history);
    getProducts(setProducts);
  }, [history]);

  return (
    <div className="products-wrapper">
      <ControllerHeader />
      <section className="product-list">
        { products && products
          .map((prod, index) => (<Card
            key={ prod.id }
            product={ prod }
            setTotal={ setCartTotal }
            index={ index }
          />
        ))}
      </section>
      <ShowCart total={ cartTotal } />
    </div>
  );
}

export default Products;
