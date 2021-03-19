import React, { useEffect } from 'react';
import * as axiosHandler from 'axios';
import ControllerHeader from '../components/ControllerHeader';
// import Card from '../components/Card'
// import ShowCart from '../components/ShowCart'
// import img from '../img/beer.png';

function Products() {
  const buildAxiosHandler = () => {
    const axios = axiosHandler.create({
      baseURL: 'http://localhost:3001',
    });

    return axios;
  };

  const getProducts = async () => {
    const axios = buildAxiosHandler();
    const token = localStorage.getItem('token');
    console.log(token);

    axios.get('/products', {
      headers: {
        authorization: token,
      } }).then(async (response) => console.log(response));
  };

  useEffect(() => {
    getProducts();
  });

  return (
    <div>
      <ControllerHeader />
      {/* {
        products
          ? products.map((product, index) => <Card products={ products } index={ index }/>)
          : 'There are no products to show'
      } */}
      {/* <ShowCart /> */}
    </div>
  );
}

export default Products;
