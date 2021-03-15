import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

const Input = ({ type, onChange, name, value, dataTestId, color }) => (
  <S.Container type={ type }>
    <S.Text>{ name }</S.Text>
    <S.Input
      color={ color }
      data-testid={ dataTestId }
      value={ value }
      onChange={ onChange }
      name={ name }
      type={ type }
    />
  </S.Container>
);

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  dataTestId: PropTypes.string,
  color: PropTypes.string,
};

Input.defaultProps = {
  type: 'email',
  onChange: ({ target }) => console.log(target.value),
  name: 'Email',
  value: '',
  dataTestId: '',
  color: '#ACADBC',
};

export default Input;
