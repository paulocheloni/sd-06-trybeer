import styled, { css } from 'styled-components';

const Container = styled.div`
  ${() => css`
    margin-bottom: 50px;
    position: relative;
    display: flex;

    > h1 {
      font-family: 'Typoslab';
      font-size: 60px;
      color:  #397330;

      > span {
        color: #cf8d2e;
      }
    }

    > img {
      width: 80px;
      position: absolute;
      bottom: 45px;
      left: 185px;
    }
  `}
`;

export default {
  Container,
};
