import React from 'react';

import CompCheckBox from './styles';

const CheckBox = ({
  type,
  width,
  height,
  checked,
  onChange,
  dataTestid,
}) => (
  <CompCheckBox
    checked={ checked }
    type={ type }
    width={ width }
    height={ height }
    onChange={ (e) => onChange(e) }
    data-testid={ dataTestid }
  />
);

export default CheckBox;
