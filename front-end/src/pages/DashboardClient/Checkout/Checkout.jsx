import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../../../components/Header/Header';
// import { parseCartPrice } from '../../../utils/parseValues';
import Button from '../../../components/Button/Button';
import { verifyUser } from '../../../store/LocalStorage/actions';
import { postSale } from '../../../services/Sales';
import CheckoutCard from '../../../components/checkoutCard/CheckoutCard';
import AddressForm from './AddressForm';
import { parseCartPrice } from '../../../utils/parseValues';
import { TWO_THOUSAND, NINETEEN } from '../../../services/magicNumbers';

const Checkout = (props) => {
  const { location } = props;

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
  const [mySum, setSum] = useState(location.state.sum);
  const [chkButton, setChkButton] = useState(true);
  const [chkForm, setChkForm] = useState({ st: '', num: '' });
  const [user] = useState(JSON.parse(localStorage.getItem('user')));
  const [statusPedido] = useState('Pendente'); // ou Entregue
  const [saleDone, setSaleDone] = useState(false);

  const history = useHistory();
  useEffect(() => {
    verifyUser(history);
  }, [history]);

  useEffect(() => {
    const sumNumber = Number(mySum.split(' ')[1].replace(',', '.'));
    if (chkForm.st.length && chkForm.num.length && sumNumber > 0) {
      setChkButton(false);
    } else {
      setChkButton(true);
    }
  }, [mySum, chkForm]);

  const handleChange = (input, e) => {
    setChkForm({ ...chkForm, [input]: e.target.value });
  };

  const changeState = (newState) => {
    setCart(newState);
    const newCart = JSON.parse(localStorage.getItem('cart'));
    let newValue = 0;
    newCart.map((product) => {
      newValue += Number(product.price);
      return newValue;
    });
    setSum(parseCartPrice(newValue));
  };

  const makeSale = async () => {
    const date = (new Date()).toISOString().slice(0, NINETEEN)
      .replace(/-/g, '/')
      .replace('T', ' ');
    const payload = {
      user_id: user.id,
      total_price: Number(mySum.split(' ')[1].replace(',', '.')).toFixed(2),
      delivery_address: chkForm.st,
      delivery_number: chkForm.num,
      sale_date: date,
      status: statusPedido,
    };
    const saleResponse = await postSale(user.token, payload);

    if (saleResponse.affectedRows) {
      setSaleDone('Compra realizada com sucesso!');

      setTimeout(() => {
        localStorage.setItem('cart', '[]');
        return history.push('/products');
      }, TWO_THOUSAND);
    } else {
      setSaleDone(saleResponse);
    }
  };

  return (
    <div>
      {(saleDone)
        ? (
          <h1>{saleDone}</h1>
        )
        : (
          <div>
            <Header title="Finalizar Pedido" user="client" />
            <h3>Produtos</h3>
            {
              (cart.length)
                ? (
                  cart.map((product, index) => (
                    <CheckoutCard
                      product={ product }
                      changeState={ changeState }
                      key={ index }
                    />
                  ))
                )
                : (<h2>Não há proodutos no carrinho</h2>)
            }
            <span data-testid="order-total-value">
              Total:
              {mySum}
            </span>
            <h3>Endereço</h3>
            <AddressForm handleChange={ handleChange } />
            <Button
              title="Finalizar pedido"
              isDisabled={ chkButton }
              testId="checkout-finish-btn"
              onClick={ () => makeSale() }
            />
          </div>
        )}
    </div>
  );
};

Checkout.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      sum: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Checkout;
