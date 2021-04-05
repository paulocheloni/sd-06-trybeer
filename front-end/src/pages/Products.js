import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import * as FaIcons from 'react-icons/fa';
import { getProducts } from '../api/axiosApi';
import Navbar from '../components/Navbar';
import {
  Content,
  Card,
  Title,
  SpanPrice,
  ButtonMinAndPlus,
  DivQuantity,
  DivInfoCart,
  ButtonCart,
  SpanTotalPrice,
} from '../styles/ProductsStyles';
import { Container } from '../styles/styles';
import { HeaderStyled } from '../styles/HeaderStyles';
import Header from '../components/Header';

export default function Products(props) {
  console.log(props)
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const execute = async () => {
    const productsStored = localStorage.getItem('products');

    if (productsStored) {
      setProducts(JSON.parse(productsStored));
    } else {
      let productsDB = await getProducts();
      productsDB = productsDB.map((product) => ({ ...product, quantity: 0 }));
      setProducts(productsDB);
      localStorage.setItem('products', JSON.stringify(productsDB));
    }
  };

  useEffect(() => {
    const localStorageProfile = JSON.parse(localStorage.getItem('user'));
    if (localStorageProfile === null) {
      history.push('./login');
    }
    execute();
  }, [history]);

  const handleClickMinus = (product) => {
    product.quantity = product.quantity > 0 ? product.quantity - 1 : 0;
    const cloneProducts = [...products];
    setProducts(cloneProducts);
    localStorage.setItem('products', JSON.stringify(cloneProducts));
  };

  const handleClickPlus = (product) => {
    product.quantity += 1;
    const cloneProducts = [...products];
    setProducts(cloneProducts);
    localStorage.setItem('products', JSON.stringify(cloneProducts));
  };

  const updateTotalPrice = () => {
    let updatePrice = 0;
    products.forEach((product) => {
      updatePrice += product.price * product.quantity;
    });
    setTotalPrice(updatePrice);
  };

  useEffect(() => {
    updateTotalPrice();
  }, [products, updateTotalPrice]);

  return (
    <div>
      <Header />
      <Navbar />
      <DivInfoCart>
        <ButtonCart
          type="button"
          id="viewCart"
          className="viewCart"
          data-testid="checkout-bottom-btn"
          disabled={ totalPrice === 0 }
          onClick={ () => history.push('./checkout') }
        >
          <FaIcons.FaShoppingCart style={ { padding: '0 8px' } } />
          Ver Carrinho
        </ButtonCart>
        <SpanTotalPrice data-testid="checkout-bottom-btn-value">
          { `R$ ${totalPrice.toFixed(2).replace('.', ',')}` }
        </SpanTotalPrice>

      </DivInfoCart>
      <Container>
        <Content>
          {products && products.map((product, index) => (
            <Card key={ product.id }>
              <img
                alt={ product.url_image }
                data-testid={ `${index}-product-img` }
                src={ product.url_image }
                style={ { objectFit: 'cover', width: '100%' } }
              />
              <Title data-testid={ `${index}-product-name` }>
                { product.name }
              </Title>
              <SpanPrice data-testid={ `${index}-product-price` }>
                { `R$ ${product.price.replace('.', ',')}` }
              </SpanPrice>
              <DivQuantity>
                <ButtonMinAndPlus
                  type="button"
                  id="minusId"
                  className="minusClassName"
                  data-testid={ `${index}-product-minus` }
                  onClick={ () => handleClickMinus(product) }
                >
                  -
                </ButtonMinAndPlus>
                <SpanPrice data-testid={ `${index}-product-qtd` }>
                  { product.quantity }
                </SpanPrice>
                <ButtonMinAndPlus
                  type="button"
                  id="plusId"
                  className="plusClassName"
                  data-testid={ `${index}-product-plus` }
                  onClick={ () => handleClickPlus(product) }
                >
                  +
                </ButtonMinAndPlus>
              </DivQuantity>
            </Card>
          ))}
        </Content>
      </Container>
    </div>
  );
}
