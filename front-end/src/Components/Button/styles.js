import styled, { css } from 'styled-components';

const CompButton = styled.button`
  ${({ theme, width, heigth, color, fontSize, position, botton, stateSideBar }) => css`
    width: ${width || '100%'};
    height: ${heigth};

    opacity: ${stateSideBar && '0.2'};

    position: ${position};
    bottom: ${botton};

    font-size: ${fontSize};
    font-weight: 600;

    margin-bottom: 20px;

    background: ${theme.colors[color]};

    border: none;
    border-radius: 5px;

    box-shadow: 0 0 2px 0;

    cursor: pointer; 

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }

    @media (max-width: 500px) {
      width: ${width || '100%'};
    }
  `}
`;

export default CompButton;
