import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html body {
    height: 100%;
  }

  body {
    /* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap'); */
    padding: 0;
    margin: 0;
    font-family: 'Rubik', sans-serif;
  }
`;

export default GlobalStyles;
