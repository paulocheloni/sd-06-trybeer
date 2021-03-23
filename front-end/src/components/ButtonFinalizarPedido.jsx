import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { compraFinalizada, tokenExists } from '../services/index';

function ButtonFinalizarPedido(props) {
  const history = useHistory();
  const { total, address } = props;
  const [activeBtn, setActiveBtn] = useState(false);
  const [activeText, setActiveText] = useState(false);
  const [showSucessMessage, setShowSucessMessage] = useState(true);

  useEffect(() => {
    if(parseInt(total) > 0 && address.address !== '' && address.number !== '') {
      setActiveBtn(true)
    } else setActiveBtn(false)
    if(parseInt(total) > 0) {
      setActiveText(true)
    } else setActiveText(false)
  }, [total, address]);

  useEffect(() => {
    setTimeout(() => {
      setShowSucessMessage(true)

      if (!showSucessMessage) {
        history.push('/products')
      }
    }, 2000)
  }, [showSucessMessage]);

  useEffect(() => {
    tokenExists(history);
    // getProducts(setProducts);
  }, [history]);

  return (
    <div>
      <button
        data-testid="checkout-finish-btn"
        type="button"
        disabled={ !activeBtn }
        onClick={() => compraFinalizada(total, address, setShowSucessMessage) }
      >
        Finalizar Pedido
      </button>
      <p hidden={activeText}>Não há produtos no carrinho</p>
      <p hidden={showSucessMessage}>Compra realizada com sucesso!</p>
    </div>
  );
}

export default ButtonFinalizarPedido;
