import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  *, input, button {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    outline: 0;

    transition: color .2s ease-out;
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

    ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px gray;
    border-radius: 4px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--orangeicons);
    border-radius: 4px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--orangeicons);
  }
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
