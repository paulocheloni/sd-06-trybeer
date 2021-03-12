import styled, { css } from 'styled-components';

const CompButton = styled.button`
  ${({ width, heigth, color }) => css`
    width: ${width};
    height: ${heigth};

    margin-bottom: 20px;

    background: ${color};

    border: none;
    border-radius: 5px;

    box-shadow: 0 0 2px 0;

    cursor: pointer; 

    @media (max-width: 500px) {
      width: 100%;
    }
  `}
`;

export default CompButton;
