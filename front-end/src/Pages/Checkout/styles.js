import styled from 'styled-components';

const Container = styled.div`
  width: 100%;

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
      width: 92%;
    }
  }
`;

export default {
  Container,
  ContainerButton,
};
