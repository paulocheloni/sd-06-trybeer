import React from 'react';
import { useHistory } from 'react-router';
import GetProducts from '../../services/GetProducts';
import CardProduct from '../../Components/CardProduct';
import Menu from '../../Components/Menu';

const Products = () => {
  const [products, setProducts] = useState([]);
  const history = useHistory();
  useEffect(() => {
    if (localStorage.products && JSON.parse(localStorage.products) !== []) {
      return setProducts(JSON.parse(localStorage.products));
    }

    return GetProducts(setProducts);
  }, []);
  useEffect(() => {
    if (!window.localStorage.token) {
      history.push('/login');
    }
  });
  return (
    <>
      <Menu><p data-testid="top-title">TryBeer</p></Menu>
      <CardProduct products={ products } />
    </>
  );
};
export default Products;
