import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    width: 100%;
    height: 100vh;
  `}
`;

const ContainerOrders = styled.div`
  ${({ theme, stateSideBar }) => css`
    opacity: ${stateSideBar ? '0.3' : '1'};

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

    > div {
      display: flex;
      justify-content: space-between;

      > h2 {
        font-size: 20px;
        font-weight: 400;
      }
    }
  `}
`;

export default {
  Container,
  ContainerOrders,
  CardOrder,
};
