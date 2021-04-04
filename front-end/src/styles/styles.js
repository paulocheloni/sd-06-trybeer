import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 30px;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
`;

export const InputStyled = styled.input`
  background-image: ${(props) => props.image};
  border: 1px solid #08c;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: text;
  display: inline;
  font-size: 16px;
  margin: 6px 0px;
  padding: 14px 20px;
  width: 100%;
  &:active,
  &:focus {
    background-color: lightblue;
    border: 3px solid #08c;
  }
`;

export const Label = styled.label`
  display: inline-block;
  font: 20px Arial, sans-serif;
  font-stretch: condensed;
  padding: 12px 12px 0 0;
`;

export const Button = styled.button`
  background-color: #08c;
  border: none;
  color: white;
  display: inline-block;
  font-size: 18px;
  margin: 12px 0;
  padding: 15px 20px;
  text-align: center;
  text-decoration: none;
  width: 100%;
`;

export const Title = styled.h1`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', Verdana, sans-serif
`;
