import React from 'react';

function ButtonsForm(valid, handleClick) {
  return (
    <div>
      <button
        type="submit"
        disabled={ valid }
        onClick={ handleClick }
        data-testid="signup-btn"
      >
        CADASTRAR
      </button>
    </div>
  );
}

export default ButtonsForm;
