import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary};

    width: 200px;
    height: 250px;
    padding: 10px;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 5px ${theme.colors.shadowCards};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 500px) {
      width: 48.5%;
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 10px;
    }
  `}
`;

const Price = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-weight: 500;
  `}
`;

const Image = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    height: 120px;
  }
`;

const Description = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    margin-bottom: 10px;
    text-align: center;
    font-size: 15px;
    font-weight: 500;
  `}
`;

const Counter = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    width: 100%;
    height: 35px;
    flex: inherit;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `}

  > div {
    ${({ theme }) => css`
      font-size: 20px;
      border: 1px solid ${theme.colors.text};
      border-radius: 3px;
      padding: 1px 5px;
    `}
  }

  > button {
    ${({ theme }) => css`
      color: ${theme.colors.text};

      font-size: 40px;
      background: none;
      border: none;

      cursor: pointer;

      transition: opacity 0.3s;

      &:hover {
        opacity: 0.8;
      }
    `}
  }
`;

export default {
  Container,
  Price,
  Image,
  Description,
  Counter,
};
