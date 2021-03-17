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
      background-image: linear-gradient(
        ${theme.colors.secondary} 50%,
        ${theme.colors.primary} 50%
      );
    }
  `}
`;

const Form = styled.form`
  ${({ theme }) => css`
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

    .label-checkBox {
      color: ${theme.colors.text};
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: 500;

      .input-checkBox {
        width: 20px;
        height: 20px;
        font-size: 16px;
        margin-right: 10px;
        border: none;
        border-radius: 5px;
        box-shadow: 0 0 2px 0;
      }
    }

    @media (max-width: 500px) {
      border: none;
      padding-bottom: 0;
      border-radius: 0;
      box-shadow: 0 -5px 5px 0 black;
      background: ${theme.colors.secondaryMobile};
      box-shadow: 0 -5px 5px 0 ${theme.colors.shadowMobile};
      width: 100%;
    }
  `}
`;

export default {
  Container,
  Form,
};
