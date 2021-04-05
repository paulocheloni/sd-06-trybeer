import styled from 'styled-components';

export const DivNav = styled.div`
  background: linear-gradient(135deg, #ba0c2f 0%, #89011d 100%);
  height: 100%;
  left: 0;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  transition: 0.5s;
  z-index: 1;
  a {
    color: whitesmoke;
    display: block;
    font-size: 26px;
    padding: 8px;
    text-decoration: none;
    transition: 0.3s;
    &:focus,
    &:hover {
      color: #f1f1f1
    }
  }
`;

export const DivLink = styled.a`
  color: whitesmoke;
  display: block;
  font-size: 26px;
  padding: 8px;
  text-decoration: none;
  transition: 0.3s;
  &:focus,
  &:hover {
    color: #f1f1f1
  }
`;

export const DivNavContent = styled.div`
margin-top: 30px;
position: relative;
text-align: center;
top: 25%;
width: 100%;
a {
    color: whitesmoke;
    display: block;
    font-size: 26px;
    padding: 8px;
    text-decoration: none;
    transition: 0.3s;
    &:focus,
    &:hover {
      color: #f1f1f1
    }
  }
`;

export const nada = 'bullshit';
