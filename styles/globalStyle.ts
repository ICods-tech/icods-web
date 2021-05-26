import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    max-height: 100vh;
    max-width: 100vw;
    background: #2B90D9;
  }

  * { 
    font-family: 'Manrope', sans-serif;
    margin: 0;
    padding: 0;
    /* background: teal; */
    /* font-famil */
    /* overflow: hidden; */
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
