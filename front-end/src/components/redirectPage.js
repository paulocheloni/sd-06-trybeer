import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

function RedirectPage({ rota, id, conteudo }) {
  const history = useHistory();
  function handleClick() {
    history.push(rota);
  }
  return (
    <button type="button" data-testid={ id } onClick={ handleClick }>{ conteudo }</button>
  );
}

export default RedirectPage;

RedirectPage.propTypes = {
  id: PropTypes.string.isRequired,
  rota: PropTypes.string.isRequired,
  conteudo: PropTypes.string.isRequired,
};
