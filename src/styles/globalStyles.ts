import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    width: 100%;
    height: 100%;
    background:white;
    color: black;
    font-family: 'Cinzel';
  }
  a {
    &:visited {
      color: black;
    }
  }
`;

export default GlobalStyle;
