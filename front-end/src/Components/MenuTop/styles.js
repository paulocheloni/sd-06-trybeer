import styled, { css } from 'styled-components';

const CompMenuTop = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 50px;

    z-index: 999;

    position: fixed;
    overflow: hidden;

    padding: 0 1rem;

    background: ${theme.colors.black};
    border-bottom: 3px solid ${theme.colors.green};

    display: flex;
    align-items: center;

    > button {
      background: none;
      
      padding: 3px 5px 0 5px;

      border: 1px solid ${theme.colors.white};
      border-radius: 3px;

      cursor: pointer;

      transition: filter 0.3s;

      &:hover {
        filter: brightness(0.8);
      }

      > img {
        width: 16px;
      }
    }

    > h2 {
      font-size: 22px;
      color: ${theme.colors.white};
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  `}
`;

export default CompMenuTop;
