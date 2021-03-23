import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { GlobalContext } from '../../Contexts/GlobalContext';

import S from './styles';

const redirectOrderDetails = (setPending, history, id) => {
  setPending(false);
  history.push(`/admin/orders/${id}`);
};

const CardAdminStatus = ({
  id,
  number,
  status,
  address,
  totalValue,
  index,
}) => {
  const [pending, setPending] = useState(true);
  const { stateSideBarAdmin } = useContext(GlobalContext);

  const history = useHistory();

  return (
    <S.Container
      pending={ pending }
      onClick={ () => history.push(`/admin/orders/${id}`) }
    >

      <S.ColorStatus
        pending={ pending }
        stateSideBarAdmin={ stateSideBarAdmin }
      />

      <S.ContentLeft className="content-left">
        <h2 data-testid={ `${index}-order-number` }>
          {`Pedido ${id}`}
        </h2>
        {pending ? (
          <span data-testid={ `${index}-order-status` }>
            {status}
          </span>
        ) : (
          <span>
            Entregue
          </span>
        )}
      </S.ContentLeft>

      <S.ContentRight>
        <span data-testid={ `${index}-order-address` }>
          {`${address}, ${number}`}
        </span>
        <p data-testid={ `${index}-order-total-value` }>
          R$
          {' '}
          {(totalValue).replace('.', ',')}
        </p>
      </S.ContentRight>

      <S.ConfirmButton
        className="confirm"
        onClick={ () => redirectOrderDetails(setPending, history, id) }
      >
        Confirmar entrega
      </S.ConfirmButton>

    </S.Container>
  );
};

CardAdminStatus.propTypes = {
  id: PropTypes.number.isRequired,
  number: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  totalValue: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default CardAdminStatus;
