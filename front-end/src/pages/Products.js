import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/axiosApi';
import Navbar from '../components/Navbar';

export default function Products() {
  const [quantityClick, setquantityClick] = useState(0);
  // const [quantityProducts, setquantityProducts] = useState(0);

  const execute = async () => {
    const products = await getProducts();
    // console.log(products);
    localStorage.setItem('products', JSON.stringify(products));
    // setproductsAll(products);
    return products;
  };

  useEffect(() => {
    execute();
  }, []);

  const localStorageProducts = JSON.parse(localStorage.getItem('products'));
  // console.log(localStorageProducts, 'localStorageProducts');
  // Console para verificar respostas
  // const idProfile = localStorageProducts[0].id;
  // console.log(idProfile, 'id');
  // const nameProfile = localStorageProducts[0].name;
  // console.log(nameProfile, 'NAME');
  // const priceProfile = localStorageProducts[0].price;
  // console.log(priceProfile, 'price');
  // const urlImageProfile = localStorageProducts[0].url_image;
  // console.log(urlImageProfile, 'url_image');
  //

  const clickMinus = (index, localStorageProducts) => {
    const quantity = quantityClick;
    console.log(quantity);
    const { name, price } = localStorageProducts;
    const newProduct = { index, name, price, quantity: quantity - 1 };
    console.log(newProduct);
    setquantityClick(quantity - 1);
  };

  const clickPlus = (index, localStorageProducts) => {
    const quantity = quantityClick;
    console.log(quantity);
    const { name, price } = localStorageProducts;
    const newProduct = { index, name, price, quantity: quantity + 1 };
    console.log(newProduct);
    setquantityClick(quantity + 1);
  };

  return (
    <div>
      <p>Your Code Here</p>
      <Navbar />
      <ul>
        {localStorageProducts.map((localStorageProducts, index) => {
          return (
            <div key={
              `${localStorageProducts.name}_${localStorageProducts.price}_${localStorageProducts.url_image}`}
            >
              <img
                data-testid={ `${index}-product-img` }
                src={ localStorageProducts.url_image }
              />
              <p data-testid={ `${index}-product-name` }>
                { localStorageProducts.name }
              </p>
              <p data-testid={ `${index}-product-price` }>
                { localStorageProducts.price }
              </p>
              <button
                type="button"
                id="minusId"
                className="minusClassName"
                data-testid={ `${index}-product-minus` }
                onClick={ () => clickMinus( index, localStorageProducts )}
                >
                -
              </button>
              <span data-testid={ `${index}-product-qtd` }>
                { quantityClick }
              </span>
              <button 
                type="button"
                id="plusId"
                className="plusClassName"
                data-testid={ `${index}-product-plus` }
                onClick={ () => clickPlus( index, localStorageProducts )}
              >
                +
              </button>
            </div>
        )})}
      </ul>
    </div>
  );
}
