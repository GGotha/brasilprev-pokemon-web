import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";

const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none !important;
  }
  html, body, #root {
    min-height: 100%;
  }
  body {
    font-family: Roboto, Helvetica, sans-serif;
    background: #36454f !important;
  }
  a {
    text-decoration: none;
  }
  .MuiFormLabel-root.Mui-focused {
    color: black
  }
  .MuiOutlinedInput-root.Mui-focused
  .MuiOutlinedInput-notchedOutline {
    border-color: black;
    border-width: 1px
  }

`;

export default GlobalStyle;
