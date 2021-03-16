import styled, { css } from 'styled-components';

const CompInput = styled.label`
  ${({ theme, themeStorage }) => css`
    color: ${theme.colors.text};

    width: 100%;

    display: flex;
    flex-direction: column;

    font-size: 20px;
    font-weight: 450;

    > input {
      background: ${theme.colors.backgroundInput};
      color: ${theme.colors.text};

      width: 400px;
      height: 40px;

      padding-left: 10px;
      font-size: 16px;

      margin: 5px 0 20px 0;

      border: ${themeStorage === 'light' ? '1px solid #CCCCCC' : '1px solid #353535'};
      border-radius: 5px;

      @media (max-width: 500px) {
        width: 100%;
      }
    }
  `}
`;

export default CompInput;
