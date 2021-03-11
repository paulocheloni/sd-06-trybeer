import React from 'react';
import * as S from './style';

const model = () => {
  return (
    <S.Container>
      <S.ContainerLeft>
        <h1>Container Esquerda</h1>
      </S.ContainerLeft>
      <S.ContainerRight>
        <h1>Container Direita</h1>
      </S.ContainerRight>
    </S.Container>
  ); 
}

export default model;
