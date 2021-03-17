import axios from 'axios';

const GetProducts = async () => {
  const response = await axios.get('http://localhost:3001/products');
  console.log('resposta axius:', response);
  return response;
};

export default GetProducts;
