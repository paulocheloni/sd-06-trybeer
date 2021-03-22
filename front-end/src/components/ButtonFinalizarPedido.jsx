import React, { useState, useEffect } from 'react';
import { compraFinalizada } from '../services/index';

function ButtonFinalizarPedido(props) {
  const { total } = props;
  const [activeBtn, setActiveBtn] = useState(false);

  useEffect(() => {
    if(parseInt(total) === 0) {
      setActiveBtn(true)
    } else setActiveBtn(false)
  }, [total]);

  return (
    <div>
      <button type="button"
        disabled={ activeBtn }
        onClick={() => compraFinalizada() }
      >
        Finalizar Pedido
      </button>
    </div>
  );
}

export default ButtonFinalizarPedido;
