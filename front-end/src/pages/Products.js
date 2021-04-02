import React, { useEffect } from 'react';
import { getProducts } from '../api/axiosApi';
import Navbar from '../components/Navbar';

export default function Products() {
  // const [productsAll, setproductsAll] = useState({});
  // console.log(productsAll, 'productsAll');
  // console.log(productsAll[0], 'productsAll [0]');

  const execute = async () => {
    const products = await getProducts();
    console.log(products);
    localStorage.setItem('products', JSON.stringify(products));
    // setproductsAll(products);
    return products;
  };

  useEffect(() => {
    execute();
  }, []);

  const localStorageProducts = JSON.parse(localStorage.getItem('products'));
  console.log(localStorageProducts, 'localStorageProducts');

  const idProfile = localStorageProducts[0].id;
  console.log(idProfile, 'id');
  const nameProfile = localStorageProducts[0].name;
  console.log(nameProfile, 'NAME');
  const priceProfile = localStorageProducts[0].price;
  console.log(priceProfile, 'price');
  const urlImageProfile = localStorageProducts[0].url_image;
  console.log(urlImageProfile, 'url_image');

  return (
    <div>
      <p>Your Code Here</p>
      <Navbar />
      <ul>
        {localStorageProducts.map((localStorageProducts, _index) => {
          return (
          <p key={
            `${localStorageProducts.name}_{localStorageProducts.price}_{localStorageProducts.url_image}`}>
            {localStorageProducts.name} - {localStorageProducts.price} - {localStorageProducts.url_image}
          </p>
        )})}
      </ul>
    </div>
  );
}
