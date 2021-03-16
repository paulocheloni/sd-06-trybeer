import React, { useEffect, useState } from 'react';
import SidebarMenu from '../components/SideBarMenu';
import TopMenu from '../components/TopMenu';
import fetchFunctions from '../api/fetchFunctions';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';

function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    await fetchFunctions.get('products').then((productsArray) => {
      setProducts(productsArray);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <TopMenu />
      <SidebarMenu />
      {products.map(({ name, price, url_image: urlImage }, index) => (
        <ProductCard
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

export default Products;
