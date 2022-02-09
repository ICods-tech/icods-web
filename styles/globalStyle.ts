import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
        --background: #f0f2f5;
        --main: #171717;
        
        --text-shape: #ffffff;
        --text-dark: rgba(0, 0, 0, 0.87);
  }

  
  html {
        // Telas com o máximo de 1080px de largura usem a definição abaixo
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }
        // Telas com o máximo de 720px de largura usem a definição abaixo
        @media (max-width: 720px) {
            font-size: 87.5%; // 14 px
        }
  }


  * { 
    font-family: 'Manrope', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    /* background: teal; */
    /* font-famil */
    /* overflow: hidden; */
  }

  body {
    max-height: 100vh;
    max-width: 100vw;
    background: #2B90D9;
  }

  button {
    margin: 0;
  }

  a { 
    text-decoration: none;
  }

  h1 { 
    font-weight: 800;
    line-height: 45.6px;
    letter-spacing: 0.02em;
  }

  p { 
    letter-spacing: 0.02em;
    font-weight: 300;
    line-height: 2rem;
  }

  a {
    font-weight: 600;
  }
`

export default GlobalStyle
