import styled, { css } from 'styled-components';

const Container = styled.div`
  ${() => css`
    margin-bottom: 20px;
    position: relative;
    display: flex;

    > h1 {
      font-family: 'Typoslab';
      font-size: 55px;
      color:  #397330;

      > span {
        color: #cf8d2e;
      }
    }

    > img {
      width: 70px;
      position: absolute;
      bottom: 42px;
      left: 172px;
    }
  `}
`;

export default {
  Container,
};
