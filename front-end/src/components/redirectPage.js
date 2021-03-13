import React from 'react';
import { useHistory } from 'react-router-dom';

function RedirectPage({ rota, id, conteudo }) {
  let history = useHistory();
  function handleClick() {
    history.push(rota);
  }
  return (
    <button type="button" data-testid={ id }  onClick={ handleClick }>{ conteudo }</button>
  );
}

export default RedirectPage;
