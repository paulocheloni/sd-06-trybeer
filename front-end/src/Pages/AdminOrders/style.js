import styled from 'styled-components';

export const Container = styled.div`

display: flex;
left: 1px;
width: 100%;
max-width: 100%;
`;

export const Title = styled.h1`
  margin: 3%;
  font-size: 30pt;
  color: ${({ color }) => color}; // color
`;

export const SideBar = styled.div`
  display: flex;
  heigth: 100%;
  width: 100%;
`;

export const CardsOrder = styled.div`

display: inline-block;
width: 100%;
max-width: 100%;
`;
