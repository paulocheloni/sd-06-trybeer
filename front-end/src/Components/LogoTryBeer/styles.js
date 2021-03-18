import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ stateSideBar }) => css`
    opacity: ${stateSideBar && '0.2'};

    position: relative;
    display: flex;

    margin-bottom: 50px;

    @media (max-width: 500px) {
      margin-bottom: 30px;
    }

    > h1 {
      font-family: 'Typoslab';
      font-size: 55px;
      color:  #397330;

      @media (max-width: 500px) {
        font-size: 50px;
      }

      > span {
        color: #cf8d2e;
      }
    }

    > img {
      width: 70px;
      position: absolute;
      bottom: 40px;
      left: 170px;

      @media (max-width: 500px) {
        bottom: 35px;
        left: 150px;
      }
    }
  `}
`;

export default {
  Container,
};
