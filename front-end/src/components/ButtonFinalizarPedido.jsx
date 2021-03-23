import React, { useState, useEffect } from 'react';
import { compraFinalizada } from '../services/index';

function ButtonFinalizarPedido(props) {
  const { total } = props;
  const { endereco } = props;
  const [activeBtn, setActiveBtn] = useState(false);
  const [activeText, setActiveText] = useState(false);

  useEffect(() => {
    console.log(endereco, total)
    if(parseInt(total) === 0 || endereco.rua !== '' && endereco.numCasa !== '') {
      setActiveBtn(true)
    } else setActiveBtn(false)
    if(parseInt(total) > 0) {
      setActiveText(true)
    } else setActiveText(false)
  }, [total, endereco]);

  return (
    <div>
      <button
        data-testid="checkout-finish-btn"
        type="button"
        disabled={ !activeBtn }
        onClick={() => compraFinalizada() }
      >
        Finalizar Pedido
      </button>
      <p hidden={activeText}>Não há produtos no carrinho</p>
    </div>
  );
}

export default ButtonFinalizarPedido;
