import { useState, useEffect, useLayoutEffect } from 'react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { store } from '../store/store'
import Button from '@components/Button/Button'
import BulbIcon from '@assets/icons/bulb.svg'
import useDarkMode from 'use-dark-mode'
import '../styles/globals.scss'
export default function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false)
  const darkmode = useDarkMode(true)

  return (
    <>
      <Head>
        <meta name="viewport" content="width=600, user-scalable=no" />
      </Head>

      <Provider store={store}>
        <Button onClick={darkmode.toggle} floating="right">
          <BulbIcon />
        </Button>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
