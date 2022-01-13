import Head from 'next/head'
import type { AppProps } from 'next/app'
import useDarkMode from 'use-dark-mode'
import Navbar from '@components/navbar/Navbar'
import FloatingButton from '@components/button/FloatingButton'
import BulbIcon from '@assets/icons/bulb.svg'
import '@styles/globals.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  const darkmode = useDarkMode(true)

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <FloatingButton onClick={darkmode.toggle} floating="right">
        <BulbIcon />
      </FloatingButton>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
