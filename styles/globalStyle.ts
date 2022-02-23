import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
        --background: #2B90D9;
        --main: #171717;
        --shape: #ffffff;
        --text-title: rgba(0, 0, 0, 0.87);
        --dark-void: #171717;
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
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    /* background: teal; */
  }

  body {
    max-height: 100vh;
    max-width: 100vw;
  }

  body, input, button, textArea {
    // por padrão o input, button e textArea não herdam a fonte do body, por isso forçamos aqui
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
    margin: 0;
        
  }

  a { 
    text-decoration: none;
    font-weight: 600;

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
`

export default GlobalStyle
