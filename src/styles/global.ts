import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Poppins', sans-serif;
  }

  body {
    font-size: 16px;
    background: ${({ theme }) => theme.color.background};
    font-display: swap;
    font-weight: 400;
    transition: all 0.5s ease-out;
  }

  :root {
    --primary: ${({ theme }) => theme.color.primary};
    --secondary: ${({ theme }) => theme.color.secondary};
    --background: ${({ theme }) => theme.color.background};
  }

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');
`;
