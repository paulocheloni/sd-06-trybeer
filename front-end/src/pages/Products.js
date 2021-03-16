import React, { useEffect, useState } from 'react';
import SidebarMenu from '../components/SideBarMenu';
import TopMenu from '../components/TopMenu';
import fetchFunctions from '../api/fetchFunctions';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';

function Products() {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] =useState(0);

  useEffect(async () => {
    await fetchFunctions.get('products').then((productsArray) => {
      setProducts(productsArray);
    });
  }, []);

  const increaseQuantity = () => {
    setQuantity(() => quantity + 1);
  }

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
          quantity={quantity}
          increaseQuantity={increaseQuantity}
        />
      ))}
      Products!!
      <Cart />
    </div>
  );
}

Products.propTypes = {

};

export default Products;
