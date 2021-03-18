import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;

    background: ${theme.colors.secondary};
  `}
`;

const ContainerCards = styled.section`
  ${({ stateSideBar }) => css`

    opacity: ${stateSideBar && '0.2'};

    /* overflow: auto; */

    width: 100%;
    height: 100%;

    padding: 70px 10px 65px 10px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 500px) {
      padding: 60px 10px 50px 10px;
    }
  `} 
`;

const ContainerButton = styled.div`
    width: 100%;
    padding: 0 19px;

    display: flex;
    justify-content: center;

    > button {
      width: 50%;
    }

  @media (max-width: 500px) {
    padding: 0 15px;

    > button {
      width: 95%;
    }
  }
`;

export default {
  Container,
  ContainerButton,
  ContainerCards,
};
