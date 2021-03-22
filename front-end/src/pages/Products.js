import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import SidebarMenu from '../components/SideBarMenu';
import TopMenu from '../components/TopMenu';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import TrybeerContext from '../context/TrybeerContext';
import fetchFunctions from '../api/fetchFunctions';

function Products() {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const { user } = useContext(TrybeerContext);

  const fetchProducts = async () => {
    const allProducts = await fetchFunctions.get('products', user.token);
    setProducts(allProducts);
  };

  useEffect(() => {
    if (!user.token) {
      history.push('/login');
    }
    fetchProducts();
  }, [user, history]);

  return (
    <div>
      <TopMenu />
      <SidebarMenu />
      <div className="products-container">
        {products && products.map(({ id, name, price, url_image: urlImage }, index) => (
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
