import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ theme }) => css`
  
  background-color: ${theme.colors.secondary};
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
    width: 80%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    padding-top: 70px;

    > h1 {
      text-align: left;
      font-size: 20px;
    }

    > span {
      text-align: right;
    }
`

const ContainerAddress = styled.div`
  width: 80%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;

  > h1 {
    text-align: left;
    font-size: 20px;
  }
`

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
      width: 92%;
    }
  }
`;

export default {
  Container,
  ContainerProducts,
  ContainerAddress,
  ContainerButton,
};
