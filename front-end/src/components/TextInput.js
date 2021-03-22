import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const { name, testId, value, callback, readonly = 'false' } = props;

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

  let dataTestId;

  switch (testId) {
  case 'signup':
    dataTestId = `signup-${name}`;
    break;
  case 'signin':
    dataTestId = `${name}-input`;
    break;
  case 'profile':
    dataTestId = `profile-${name}-input`;
    break;
  default: return null;
  }

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
        readOnly={ readonly }
      />
    </label>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  testId: PropTypes.string.isRequired,
  callback: PropTypes.func,
  readonly: PropTypes.bool,
};

TextInput.defaultProps = {
  callback: () => {},
  value: '',
  readonly: false,
};

export default TextInput;
