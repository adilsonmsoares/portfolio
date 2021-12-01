import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { store } from '../store/store'
import '../styles/globals.scss'
import Button from '@components/Button/Button'
import BulbIcon from '@assets/icons/bulb.svg'
import useDarkMode from 'use-dark-mode'

export default function MyApp({ Component, pageProps }: AppProps) {
  const darkmode = useDarkMode(true)

  return (
    <Provider store={store}>
      <Button onClick={darkmode.toggle}>
        <BulbIcon />
      </Button>
      <Component {...pageProps} />
    </Provider>
  )
}
