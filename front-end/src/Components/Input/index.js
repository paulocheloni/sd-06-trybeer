import React from 'react';
import PropTypes from 'prop-types';

import CompInput from './styles';

const Input = ({
  readOnly,
  onChange,
  dataTestid,
  label,
  id,
}) => (
  <CompInput htmlFor={ id }>
    {label}
    <input
      id={ id }
      data-testid={ dataTestid }
      onChange={ (e) => onChange(e) }
      readOnly={ readOnly }
    />
  </CompInput>
);

Input.defaultProps = {
  readOnly: false,
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
};

export default Input;
