import Head from 'next/head'
import type { AppProps } from 'next/app'
import useDarkMode from 'use-dark-mode'
import '@styles/globals.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  const darkmode = useDarkMode(true)

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
