import Head from 'next/head'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import '@styles/globals.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <NextNProgress
        color="var(--special-color)"
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </>
  )
}
