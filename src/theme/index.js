import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #4467a0;
    --dark-blue: #36507b;
    --midnight: #262c3c;
    --dark-midnight: #11141b;
    --green: #27ae60;
    --red: #e74c3c;

    --navbar-height: 70px;
    --border-radius: 8px;
    --box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  }

  body {
    margin: 0px;
    background: var(--dark-midnight);
    color: #9da9bb;
  }
  * {
    font-family: Inter, sans-serif;
    box-sizing: border-box;
  }
`