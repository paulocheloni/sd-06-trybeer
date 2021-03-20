import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = (props) => {
  const { type, disabled } = props;

  const dataTestId = (type === 'signup')
    ? 'signup-btn'
    : 'signin-btn';

  const label = (type === 'signup')
    ? 'Cadastrar'
    : 'ENTRAR';

  return (
    <button type="submit" data-testid={ dataTestId } disabled={ disabled }>
      { label }
    </button>
  );
};

CheckBox.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default CheckBox;
