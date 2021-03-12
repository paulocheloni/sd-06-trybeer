import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > form {
    width: 500px;
    height: 350px;

    border: 1px solid black;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > h1 {
      margin-bottom: 20px; 
    }

    @media (max-width: 500px) {
      border: none;

      width: 100%;
      height: 100%;

      padding: 2rem;

    }
  }
`;

export default Container;
