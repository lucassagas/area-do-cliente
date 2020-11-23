import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: var(--background);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;

  }

  body, input, button {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    color: var(--text);
    outline: 0;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5 {
    color: var(--text);
  }

  html, body #root {
    width: 100%;
    height: 100%;
  }

  :root {
    ${props => {
      const { theme } = props;
      let append = '';
      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      });
      return append;
    }}
  }
`;
