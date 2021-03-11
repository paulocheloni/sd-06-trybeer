import React from 'react';

function Header({ text }) {
  
  return(
    <>
      <button type="button" data-testid="top-hamburguer" />
      <h1 data-testid="top-title">{ text }</h1>
    </>
  )
};

export default Header;
