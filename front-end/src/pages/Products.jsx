import React, { useEffect } from 'react';
import ControllerHeader from '../components/ControllerHeader';
import Card from '../components/Card'
import ShowCart from '../components/ShowCart'
import img from '../img/beer.png';
import * as axiosHandler from 'axios';

function Products() {
  const products = [
    { img, price: 2.50, name:"artesanal" },
    { img, price: 2.50, name:"artesanal" },
    { img, price: 2.50, name:"artesanal" },
    { img, price: 2.50, name:"artesanal" }
  ]
  
  const buildAxiosHandler = () => {
    const axios = axiosHandler.create({
      baseURL: 'http://localhost:3001',
    });
  
    return axios;
  };

  
  const getProducts = async () => {
    const axios = buildAxiosHandler();
    const token = localStorage.getItem('token')
    console.log(token)

    axios.get('/products',{
      headers:{
        'authorization': token
    }}).then(async response => console.log(response));

    // var url = '/products';
    // var bearer = 'Bearer ' + token;
    // fetch(url, {
    //         method: 'GET',
    //         withCredentials: true,
    //         credentials: 'include',
    //         headers: {
    //             'Authorization': bearer,
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(async response => {
    //       console.log( await response.text())
    //     })


    // await fetch('/products').then(response => console.log(response.text))

    // const api = await fetch('/products');
    // console.log('api', api.text())
    // const data = await api.json();
  }

  useEffect(() => {
    getProducts()
  });

  return (
    <div>
      <ControllerHeader/>
      {
        products
          ? products.map((product, index) => <Card products={ products } index={ index }/>)
          : 'There are no products to show'
      }
      <ShowCart />
    </div>
  );
}

export default Products;
