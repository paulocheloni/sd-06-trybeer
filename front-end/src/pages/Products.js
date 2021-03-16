import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import SidebarMenu from '../components/SideBarMenu';
import TopMenu from '../components/TopMenu';
import fetchFunctions from '../api/fetchFunctions';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import TrybeerContext from '../context/TrybeerContext';

function Products({ history }) {
  const [products, setProducts] = useState([]);
  const { email, password } = useContext(TrybeerContext);
  const fetchProducts = async () => {
    await fetchFunctions.get('products').then((productsArray) => {
      setProducts(productsArray);
    });
  };

  const verifyIfUserIsLogged = async () => {
    const loggedUser = await fetchFunctions.post('login', { email, password });
    const savedUser = JSON.parse(localStorage.getItem('user'));

    if ((!savedUser) && (Object.keys(loggedUser).length === 1)) {
      return history.push('/login');
    }
  };

  useEffect(() => {
    fetchProducts();
    verifyIfUserIsLogged();
  }, [verifyIfUserIsLogged]);

  return (
    <div>
      <TopMenu />
      <SidebarMenu />
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
      Products!!
      <Cart />
    </div>
  );
}

Products.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default Products;
