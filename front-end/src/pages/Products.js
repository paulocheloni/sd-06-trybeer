import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import SidebarMenu from '../components/SideBarMenu';
import TopMenu from '../components/TopMenu';
import fetchFunctions from '../api/fetchFunctions';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';

function Products({ history }) {
  const [products, setProducts] = useState([]);

  const verifyToken = () => {
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    if (loggedUser) return loggedUser;
    return false;
  }

  const fetchProducts = async () => {
    const isLogged = verifyToken();
    if (!isLogged) return history.push('/login');

    const token = isLogged.token;
    await fetchFunctions.get('products', token)
      .then((productsArray) => setProducts(productsArray));
  };


  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <TopMenu />
      <SidebarMenu />
      <div className="products-container">
        {products.map(({ id, name, price, url_image: urlImage }, index) => (
          <ProductCard
            id={ id }
            key={ index }
            name={ name }
            price={ price }
            url_image={ urlImage }
            index={ index }
          />
        ))}
      </div>
      <Cart />
    </div>
  );
}

Products.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default Products;
