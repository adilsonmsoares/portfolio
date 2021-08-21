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
    --spacing-small: 15px;
    --spacing-medium: 50px;
    --spacing-big: 100px;
    --spacing-ultra: 200px;
    --text-small:14px;
    --text-normal:16px;
    --text-medium: 32px;
    --text-large:48px;
    --icon-small:12px;
    --icon-normal:24px;
    --icon-medium:32px;
  }

  body {
    margin: 0;
    background: ${({ theme }) => theme.background.primary};
    color: ${({ theme }) => theme.color.secondary};
    font: 400 var(--text-normal) Roboto, sans-serif;
  }

  body > div > *:not(button){
    padding-left: var(--spacing-ultra);
    padding-right: var(--spacing-ultra);
    box-sizing: border-box;
    width: 100%;
  }

  body > div > section{
    height:100vh;
  }

  svg path{
    fill: ${({ theme }) => theme.color.quaternary};
  }

  .container--full-screen{
    width: 100%;
    height:100vh;
  }
  
  .shadow{
    box-shadow: ${({ theme }) => theme.shadow.primary} 0px 0px 15px;
  }

  .v-spacing-none {
    padding-top: 0;
    padding-bottom: 0;
  }

  .v-spacing-small {
    padding-top: var(--spacing-small);
    padding-bottom: var(--spacing-small);
  }

  .v-spacing-medium {
    padding-top: var(--spacing-medium);
    padding-bottom: var(--spacing-medium);
  }

  .v-spacing-big {
    padding-top: var(--spacing-big);
    padding-bottom: var(--spacing-big);
  }

  .v-spacing-ultra {
    padding-top: var(--spacing-ultra);
    padding-bottom: var(--spacing-ultra);
  }

  .h-spacing-none {
    padding-left: 0;
    padding-right: 0;
  }

  .h-spacing-small {
    padding-left: var(--spacing-small);
    padding-right: var(--spacing-small);
  }

  .h-spacing-medium {
    padding-left: var(--spacing-medium);
    padding-right: var(--spacing-medium);
  }

  .h-spacing-big {
    padding-left: var(--spacing-big);
    padding-right: var(--spacing-big);
  }

  .h-spacing-ultra {
    padding-left: var(--spacing-ultra);
    padding-right: var(--spacing-ultra);
  }
`
