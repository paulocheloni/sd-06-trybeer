import axios from 'axios';

const GetProducts = async (setProducts) => {
  const response = await axios.get('http://localhost:3001/products');
  console.log('resposta axius:', response);
  return setProducts(response.data);
};

export default GetProducts;
