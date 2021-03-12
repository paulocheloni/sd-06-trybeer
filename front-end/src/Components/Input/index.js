import React from 'react';
import PropTypes from 'prop-types';

import CompInput from './styles';

const Input = ({
  placeholder,
  onChange,
  heigth,
  dataTestid,
}) => (
  <CompInput
    data-testid={ dataTestid }
    onChange={ (e) => onChange(e) }
    placeholder={ placeholder }
    heigth={ heigth }
  />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  heigth: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default Input;
