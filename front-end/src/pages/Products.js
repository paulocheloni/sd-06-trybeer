import React, { useEffect, useContext } from 'react';
import ProductCard from '../components/Products/ProductCard';
import Cart from '../components/Products/Cart';
import TopBar from '../components/TopBar';
import { getAllProducts } from '../services/api';
import TrybeerContext from '../context/TrybeerContext';
import { Redirect } from 'react-router';

function Products() {
  const {
    products, setProducts, setCart, setTotalCart,
  } = useContext(TrybeerContext);
  const loggedUser = JSON.parse(localStorage.getItem('user'));
  const shoppingCart = localStorage.getItem('cart');
  const totalPrice = localStorage.getItem('totalPrice');

  useEffect(() => {
    getAllProducts()
      .then((products) => setProducts(products));

    if (shoppingCart) {
      setCart(shoppingCart);
      setTotalCart(totalPrice);
    }
  }, []);

  return (
    loggedUser
      ? (
        <div>
          <TopBar title="Trybeer" />
          <h1>Products</h1>
          { products.map((product, index) => {
            const { id, name, price, url_image } = product;
            return (
              <ProductCard
                key={ id }
                name={ name }
                price={ price }
                url_image={ url_image }
                index={ index }
              />
            )
          }) }
          <Cart />
        </div>
      )
      : (
        <Redirect to="/login" />
      )
    );
}

export default Products;
