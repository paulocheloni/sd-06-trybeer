import styled, { css } from 'styled-components';

const CompMenuTop = styled.header`
  ${({ theme, darkTheme }) => css`
    width: 100%;
    height: 50px;

    z-index: 999;

    position: fixed;
    overflow: hidden;

    padding: 0 1rem;

    background: ${theme.colors.secondary};
    border-bottom: 3px solid ${theme.colors.green};

    display: flex;
    align-items: center;
    justify-content: space-between;

    > button {
      background: none;
      
      padding: 3px 5px 0 5px;

      border: 1px solid ${theme.colors.border};
      border-radius: 3px;

      cursor: pointer;

      transition: filter 0.3s;

      &:hover {
        filter: brightness(0.8);
      }

      > img {
        filter: ${!darkTheme && 'brightness(0)'};
        width: 16px;
      }
    }

    > h2 {
      font-size: 22px;
      color: ${theme.colors.text};
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  `}
`;

const ContainerToggle = styled.div`
  ${({ darkTheme }) => css`
  
    display: flex;
    align-items: center;

    > img {
      width: 12px;
      height: 12px;
      margin-left: 3px;

      filter: ${!darkTheme && 'brightness(100)'};
    }

    > div {
      margin-left: 3px;
    }
  `}

`;

export default {
  CompMenuTop,
  ContainerToggle,
};
