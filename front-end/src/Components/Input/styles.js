import styled, { css } from 'styled-components';

const CompInput = styled.input`
  ${({ width, heigth }) => css`
    width: ${width};
    height: ${heigth};
    margin-bottom: 20px; 

    padding-left: 10px;

    border: none;
    border-radius: 5px;

    box-shadow: 0 0 2px 0;

    @media (max-width: 500px) {
      width: 100%;
    }
  `}
`;

export default CompInput;
