import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router';
import ProductCard from '../components/Products/ProductCard';
import Cart from '../components/Products/Cart';
import TopBar from '../components/TopBar';
import { getAllProducts } from '../services/api';
import { localStorageCart } from '../services/ProductCardService';
import TrybeerContext from '../context/TrybeerContext';

function Products() {
  const {
    products, setProducts, setCart,
  } = useContext(TrybeerContext);
  const loggedUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    getAllProducts()
      .then((product) => setProducts(product));

    if (localStorageCart) {
      setCart(localStorageCart);
    }
  }, []);

  return (
<<<<<<< HEAD
    <div>
      <TopBar title="TryBeer" />
      <h1>Products</h1>
    </div>
=======
    loggedUser
      ? (
        <div>
          <TopBar title="TryBeer" />
          { products.map((product, index) => {
            const { id, name, price, url_image: urlImage } = product;
            return (
              <ProductCard
                key={ id }
                name={ name }
                price={ price }
                urlImage={ urlImage }
                index={ index }
              />
            );
          }) }
          <Cart />
        </div>
      )
      : (
        <Redirect to="/login" />
      )
>>>>>>> 5392b5272d7d710365c2c881a603e33d10d2155d
  );
}

export default Products;
