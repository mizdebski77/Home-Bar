import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }
  
  body {
    background: ${({theme}) => theme.color.mainColor};
    color: ${({theme}) => theme.color.fontColor};
    font-family: 'Roboto Slab', serif;
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        padding: 10px;
    }

  }`;