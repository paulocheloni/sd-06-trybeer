import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const { name, testId, value, callback } = props;

  let type;
  let label;

  switch (name) {
  case 'name':
    type = 'text';
    label = 'Nome';
    break;
  case 'email':
    type = 'email';
    label = 'Email';
    break;
  case 'password':
    type = 'password';
    label = 'Senha';
    break;
  default: break;
  }

  const dataTestId = (testId === 'signup')
    ? `signup-${name}`
    : `${name}-input`;

  return (
    <label htmlFor={ name } className="inputError">
      { label }
      <input
        type={ type }
        id={ name }
        name={ name }
        value={ value }
        data-testid={ dataTestId }
        onChange={ (e) => callback(e.target) }
      />
    </label>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  testId: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  value: '',
};

export default TextInput;
