import axios from 'axios';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

const GetProducts = async () => {
  const { setProducts } = useContext(AppContext);
  const response = await axios.get('http://localhost:3001/products');
  console.log('resposta axius:', response);
  return setProducts(response.data);
};

export default GetProducts;
