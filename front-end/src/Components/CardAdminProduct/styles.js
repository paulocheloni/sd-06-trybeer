import styled, { css } from 'styled-components';

const Container = styled.div`
  ${() => css`

  `}
`;

const Products = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 2px solid ${theme.colors.borderInput}; 

    > img {
      height: 100px;
      margin-left: 20px;
      margin-right: 40px;
    }
  `}
`;

const DescriptionProducts = styled.div`
  ${() => css`
    width: 100%;
    height: 100%;
    margin-right: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      height: 60px;
      padding: 0 0;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    > span {
      font-size: 22px;
    }
  `}
`;

const ButtonProduct = styled.button`
  ${({ theme }) => css`
    width: 180px;
    height: 50px;

    font-size: 18px;
    font-weight: 550;
    color: #353535;

    border: none;
    border-radius: 5px;
    box-shadow: 0 0 5px ${theme.colors.shadowCards};
    
    background: yellow;
  `}
`;

export default {
  Container,
  Products,
  DescriptionProducts,
  ButtonProduct,
};
