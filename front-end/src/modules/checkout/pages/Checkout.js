import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../../../context/Context';
import API from '../../../axios';
import PaperContainer from '../../../design-system/containers/PaperContainer';
import BodyContainer from '../../../design-system/containers/BodyContainer';

function Checkout() {
  const { cartItems, setCartItems } = useContext(GlobalContext);
  const [stName, setStName] = useState('');
  const [adNumber, setAdNumber] = useState('');
  const [btnStatus, setBtnStatus] = useState(true);
  const [reqStatus, setReqStatus] = useState(false);
  const storedItems = cartItems;
  const history = useHistory();

  const totalPrice = storedItems.reduce((acc, curr) => {
    const result = (acc + curr.quantity * curr.price);
    return result;
  }, 0);

  const productPrice = storedItems.map((item) => item.quantity * item.price);

  const removeProduct = (productName) => {
    const newCart = cartItems.filter((item) => item.name !== productName);

    setCartItems(newCart);
  };

  const validateFields = () => {
    const streetMinChar = 5;
    if (stName.length > streetMinChar && adNumber.length > 0) return setBtnStatus(false);
    return setBtnStatus(true);
  };

  const handleChange = (value, field) => {
    if (field === 'address') return setStName(value);
    if (field === 'house-num') return setAdNumber(value);
  };

  const handleSubmit = () => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    const cart = JSON.parse(localStorage.getItem('cart'));
    const productsOnCart = cart.map((product) => ({
      id: product.id, quantity: product.quantity,
    }));

    const reqBody = {
      products: productsOnCart,
      customerId: userInfo.id,
      total: totalPrice,
      address: stName,
      number: adNumber,
    };

    API.post('/sales', reqBody).then((res) => setReqStatus(res.data));
    localStorage.removeItem('cart');
  };

  const messageTime = () => {
    const delayTime = 3000;
    const delay = setTimeout(() => {
      setCartItems([]);
      history.push('/products');
    }, delayTime);

    return delay;
  };

  const renderMessage = () => {
    const message = (
      <div
        className="bg-gray-300"
      >

        <span>Compra realizada com sucesso!</span>

        <p
          hidden
        >
          { messageTime() }
        </p>
      </div>
    );

    return message;
  };

  const renderForm = () => {
    const form = (
      <PaperContainer>
        <h1 data-testid="top-title">Checkout</h1>
        {
          storedItems.map((item, index) => (
            <div className="flex m-4 border" key={ `${index}-algo4` }>
              <p
                className="ml-3"
                data-testid={ `${index}-product-qtd-input` }
                key={ `${index}-algo ` }
              >
                {item.quantity}
              </p>

              <p
                className="ml-3"
                data-testid={ `${index}-product-name` }
                key={ `${index}-algo2` }
              >
                {item.name}
              </p>

              <p
                className="ml-3"
                data-testid={ `${index}-product-total-value` }
                key={ `${index}-algo6` }
              >
                {`R$ ${((productPrice[index]).toFixed(2)).replace('.', ',')}` }
              </p>

              <p
                className="ml-3 text-xs w-"
                data-testid={ `${index}-product-unit-price` }
                key={ `${index}-algo3` }
              >

                { `(R$ ${item.price.replace('.', ',')} un)` }
              </p>

              <button
                className="ml-3 bg-red-100"
                data-testid={ `${index}-removal-button` }
                key={ `${index}-algo5` }
                onClick={ () => removeProduct(item.name) }
                type="button"
              >
                X
              </button>
            </div>
          ))
        }
        <p
          className="w-full flex justify-center"
          data-testid="order-total-value"
        >
          { `Total: R$ ${(totalPrice.toFixed(2)).replace('.', ',')}` }
        </p>
        <form className="flex flex-col w-full items-center mt-4">
          <p>Delivery Address</p>
          <label htmlFor="address" className="w-full flex flex-col items-center">
            <input
              className="border w-2/3 mt-3"
              data-testid="checkout-street-input"
              id="adress"
              name="address"
              onChange={ ({ target }) => handleChange(target.value, target.name) }
              placeholder="Street"
              type="text"
            />
          </label>
          <label htmlFor="house-num" className="w-full flex flex-col items-center">
            <input
              className="border w-2/3 mt-3"
              data-testid="checkout-house-number-input"
              id="house-num"
              name="house-num"
              onChange={ ({ target }) => handleChange(target.value, target.name) }
              placeholder="Residence number"
              type="text"
            />
          </label>
          <button
            className="mt-4 border w-1/2 bg-green-100"
            data-testid="checkout-finish-btn"
            disabled={ btnStatus }
            onClick={ () => handleSubmit() }
            type="button"
          >
            CONFIRM
          </button>
        </form>
      </PaperContainer>
    );
    return form;
  };

  const renderEmptyCart = () => {
    const message = (
      <div>
        <span>Não há produtos no carrinho</span>
        <p
          className="w-full flex justify-center"
          data-testid="order-total-value"
        >
          { `Total: R$ ${(totalPrice.toFixed(2)).replace('.', ',')}` }
        </p>
      </div>
    );

    return message;
  };

  useEffect(() => {
    validateFields();
  }, [stName, adNumber]);

  return (
    <BodyContainer>
      { !reqStatus && cartItems.length > 0 && renderForm() }
      { reqStatus && renderMessage() }
      { !cartItems.length && renderEmptyCart() }
    </BodyContainer>
  );
}

export default Checkout;
