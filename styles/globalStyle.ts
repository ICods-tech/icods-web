import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * { 
    font-family: 'Manrope', sans-serif;
    margin: 0;
    padding: 0;
    /* background: teal; */
    /* font-famil */
    /* overflow: hidden; */
  }

  a { 
    text-decoration: none;
  }

  h1 { 
    font-weight: 800;
    line-height: 41px;
    letter-spacing: 0.02em;
  }

  p { 
    font-weight: 200;
    line-height: 26px;
  }
`

export default GlobalStyle
