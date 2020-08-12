import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;

    font-size: 100%;
    -webkit-font-smoothing: antialiased !important;
  }

  body {
    background-color: #212529;
    font-family: 'Baloo Chettan 2', cursive;
  }

  *, input, button {
    font-family: 'Baloo Chettan 2', cursive;
  }

  button {
    outline: 0;
    border: 0;
  }

  a {
    text-decoration: none;
  }
`;
