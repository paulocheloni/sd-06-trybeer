import React from 'react';
import PropTypes from 'prop-types';

import CompButton from './styles';

const Button = ({
  children,
  type,
  width,
  heigth,
  color,
  disabled,
  onClick,
  fontSize,
  dataTestid,
  position,
  botton,
}) => (
  <CompButton
    type={ type }
    color={ color }
    width={ width }
    heigth={ heigth }
    fontSize={ fontSize }
    disabled={ disabled }
    onClick={ onClick }
    data-testid={ dataTestid }
    position={ position }
    botton={ botton }
  >
    {children}
  </CompButton>
);

Button.defaultProps = {
  color: '',
  onClick: () => {},
  disabled: false,
  position: '',
  botton: '',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  heigth: PropTypes.string.isRequired,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  fontSize: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  position: PropTypes.string,
  botton: PropTypes.string,
};

export default Button;
