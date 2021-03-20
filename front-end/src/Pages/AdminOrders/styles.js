import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ theme }) => css`

    background: ${theme.colors.secondary};
  
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 500px) {
      background: ${theme.colors.primary};
    }
  `}
`;

const Context = styled.div`
  ${() => css`
    display: flex;
  `}
`;

const ContainerOrders = styled.div`
  ${({ theme, stateSideBar }) => css`
    opacity: ${!stateSideBar ? '0.3' : '1'};

    width: 100%;
    min-height: 100%;
    padding: 70px 20px 20px 20px;
    background: ${theme.colors.secondary};

    display: flex;
    flex-direction: column;
    align-items: center;

    /* @media (min-height: 500px) {
      height: 100%;
    } */

    @media (max-width: 600px) {
      padding: 60px 10px 10px 10px;
    }
  `}
`;

const CardOrder = styled.div`
  ${({ theme }) => css`
    width: 60%;
    height: 200px;
    margin-bottom: 20px;
    font-size: 20px;
    color: ${theme.colors.text};
    background: ${theme.colors.primary};
    box-shadow: 0 0 5px ${theme.colors.shadowCards};
    border-radius: 5px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
    @media (max-width: 1000px) {
      width: 70%;
    }
    @media (max-width: 700px) {
      width: 100%;
    }
    @media (max-width: 600px) {
      width: 100%;
      margin-bottom: 10px;
    }
    > p {
      text-align: right;
      margin-top: 115px;
      font-size: 24px;
      font-weight: 600;
    }
    .div-address {
      height: 55%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .div-total-value {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      > span {
        color: yellow;
      }
    }
  `}
`;

export default {
  Container,
  Context,
  ContainerOrders,
  CardOrder,
};
