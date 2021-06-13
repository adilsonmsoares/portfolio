import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --black: #2B2B2B;
    --white: #1e90ff;
    --blue: #0D436E;
    --orange: #FF5F2E;
    --grey: #B3B3B3;
    --grey-light: #F6F6F6;
    --spacing-small: 25px;
    --spacing-medium: 50px;
    --spacing-big: 100px;
    --text-small:20px
    --text-normal:24px;
    --text-medium: 48px;
    --text-large:72px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.secondary};
    font: 400 16px Roboto, sans-serif;
  }
`
