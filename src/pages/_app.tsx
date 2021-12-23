import { Provider } from 'react-redux'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import useDarkMode from 'use-dark-mode'
import { store } from '../store/store'
import FloatingButton from '@components/Button/FloatingButton'
import BulbIcon from '@assets/icons/bulb.svg'
import '@styles/globals.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  const darkmode = useDarkMode(true)

  return (
    <>
      <Head>
        <meta name="viewport" content="width=600, user-scalable=no" />
      </Head>

      <Provider store={store}>
        <FloatingButton onClick={darkmode.toggle} floating="right" disabled>
          <BulbIcon />
        </FloatingButton>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
