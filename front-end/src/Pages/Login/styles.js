import styled, { css } from 'styled-components';

// const animate = keyframes`
//   from {
//     opacity: 0;
//     transform: translate3d(-50px);
//   }
//   to {
//     opacity: 1;
//     transform: translatex(0);
//   }
// `;

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: ${theme.colors.secondary};

    > form {

      background: ${theme.colors.primary};

      padding: 20px 30px 10px 30px;

      border-radius: 5px;
      box-shadow: 0 0 5px black;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > h1 {
        margin-bottom: 20px;
        color: ${theme.colors.text};
      }

      @media (max-width: 500px) {
        border: none;
        border-radius: 0;

        background: ${theme.colors.secondaryMobile};

        width: 100%;
      }
    }
  `}
`;

export default Container;
