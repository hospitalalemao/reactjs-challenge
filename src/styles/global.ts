import { createGlobalStyle } from 'styled-components';
import { device } from './responsive';

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
    font-size: 14px;
    background: ${({ theme }) => theme.color.background};
    font-display: swap;
    font-weight: 400;
    transition: all 0.5s ease-out;

    @media ${device.tablet} { 
      font-size: 16px;
    }
  }

  :root {
    --primary: ${({ theme }) => theme.color.primary};
    --secondary: ${({ theme }) => theme.color.secondary};
    --background: ${({ theme }) => theme.color.background};

    --title-card-color: ${({ theme }) => theme.color.title_card};
    --negative-color: ${({ theme }) => theme.color.negative};
    --positive-color: ${({ theme }) => theme.color.positive};
    
    --title-color: ${({ theme }) => theme.color.title};

    --radius-default: 8px;
}
`;
