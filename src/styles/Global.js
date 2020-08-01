import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    border: 0;
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
  }

  body, html, #root {
    background: #eee;
    height: 100%;
  }

  button, input {
    outline: 0;
  }
`