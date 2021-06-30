import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --black: #000000;
    --black-evil: #111213;
    --black-light: #2B2B2B;
    --black-grey: rgba(0,0,0,0.6);
    --white: #FFFFFF;
    --white-smoke: #F9F9F9;
    --white-grey: rgba(255,255,255,0.6);
    --blue: #3B82F6;
    --orange: #FF5F2E;
    --grey: #EBEBEB;
    --grey-light: #ECECEC;
    --grey-dark: rgba(0,0,0,0.3);
    --spacing-small: 25px;
    --spacing-medium: 50px;
    --spacing-big: 100px;
    --spacing-ultra-big: 200px;
    --text-small:20px
    --text-normal:24px;
    --text-medium: 48px;
    --text-large:72px;
    --icon-small:12px;
    --icon-normal:24px;
    --icon-medium:32px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.background.primary};
    color: ${({ theme }) => theme.color.secondary};
    font: 400 16px Roboto, sans-serif;
  }

  .container{
    margin: var(--spacing-big) var(--spacing-ultra-big)
  }
`
