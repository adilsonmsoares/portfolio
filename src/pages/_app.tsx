import '@styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={prefix + 'favicon.svg'} />
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
