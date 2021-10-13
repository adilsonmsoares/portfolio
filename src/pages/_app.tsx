import React, { useState, useEffect } from 'react'
import useDarkMode from 'use-dark-mode'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import { darkTheme, lightTheme } from '../styles/theme'

import BulbIcon from '../../public/icons/bulb.svg'

import Button from '@components/Button/Button'

import '../styles/lib/bootstrap-grid.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false)
  const darkmode = useDarkMode(true)
  const theme = darkmode.value ? darkTheme : lightTheme

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {isMounted && (
        <>
          <Button onClick={darkmode.toggle}>
            <BulbIcon />
          </Button>
          <Component {...pageProps} />
        </>
      )}
    </ThemeProvider>
  )
}

export default MyApp
