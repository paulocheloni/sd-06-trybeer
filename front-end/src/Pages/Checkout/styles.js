import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ theme }) => css`
  
  background-color: ${theme.colors.primary};
  width: 100%;
  height: 100vh;

  > section {
    width: 100%;
    height: 100%;

    padding: 70px 10px 65px 10px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 500px) {
      padding: 70px 20px 60px 20px;
    }
  }
  `}
`;

const ContainerProducts = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    display: flex;
    justify-content: center;
    padding: 70px 20px 20px 20px;

    > h1 {
      font-size: 20px;
      color: ${theme.colors.text};
      margin-bottom: 20px;
    }

    > span {
      text-align: right;
    }
  `}
`;

const ContainerEmptyCart = styled.div`
  ${({ theme }) => css`
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    color: ${theme.colors.text};

    display: flex;
    justify-content: center;
  `}
`;

const SpanTotal = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    margin-top: 15px;
  `}
`;

const ContainerInfos = styled.div`
  ${({ theme }) => css`
    height: 30px;
    font-size: 14px;
    margin-bottom: 10px;

    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: ${theme.colors.secondary};
    color: ${theme.colors.text};
    border: 1px solid ${theme.colors.borderInput};

    @media (max-width: 500px) {
      font-size: 12px; 
    }

    > div {
      height: 100%;
      width: 30px;
      background: ${theme.colors.backgroundDiv};

      display: flex;
      align-items: center;
      justify-content: center;
    }
    > p {
      font-size: 10px;
    }
    > button {
      height: 100%;
      width: 30px;

      border: none;
      border-radius: 0 5px 5px 0;
      background: ${theme.colors.backgroundDiv};
      color: ${theme.colors.text};

      cursor: pointer;

      transition: filter 0.3s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  `}
`;

const ContainerAddress = styled.div`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    flex-flow: column wrap;
    align-items: center;

    color: ${theme.colors.text};

    > h1 {
      text-align: left;
      font-size: 20px;
      margin-top: 30px;
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
    padding: 0 19px;

    > button {
      width: 91%;
    }
  }
`;

const CompletedSale = styled.span`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;

    font-size: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${theme.colors.text};
  `}
`;

export default {
  Container,
  ContainerProducts,
  ContainerAddress,
  ContainerButton,
  ContainerInfos,
  ContainerEmptyCart,
  SpanTotal,
  CompletedSale,
};
