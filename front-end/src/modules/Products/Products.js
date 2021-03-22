import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TopBar from '../../design-components/TopBar';
import CartButton from '../../design-components/CartButton';
import Card from '../../design-components/Card';
import ContextBeer from '../../context/ContextBeer';
import api from '../../axios/api';

function Products() {
  const history = useHistory();
  const {
    products,
    setProducts,
    sale,
  } = useContext(ContextBeer);

  const [renderProducts, setRenderProducts] = useState(products || []);

  useEffect(() => {
    api
      .get('/products')
      .then((response) => response.data)
      .then((productsList) => {
        // setProducts([]);
        setProducts(productsList);
      })
      .catch(() => history.push('/'));
  }, [setProducts, history]);

  useEffect(() => {
    const checkedProducts = products.map((product) => {
      const checkingSale = sale.products
        .find((selectedProduct) => product.id === selectedProduct.id);
      if (checkingSale) return checkingSale;
      return product;
    });
    setRenderProducts(checkedProducts);
    // console.log('useEffect do checkproducts');
  }, [setRenderProducts, products, sale.products]);

  return (
    <div>
      <TopBar title="TryBeer" />
      <div className="flex flex-wrap p-32">
        {
          renderProducts && renderProducts.map((product, index) => (
            <Card product={ product } testIdNumber={ index } key={ product.id } />
          ))
        }
      </div>
      <CartButton />
    </div>
  );
}

export default Products;
