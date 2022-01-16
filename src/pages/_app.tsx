import { useEffect, useState } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import useDarkMode from 'use-dark-mode'
import Navbar from '@components/navbar/Navbar'
import Button from '@components/button/Button'
import ArrowUpIcon from '@assets/icons/arrowUp.svg'
import BulbIcon from '@assets/icons/bulb.svg'
import '@styles/globals.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  const darkmode = useDarkMode(true)
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  const ScrollTop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <div className="helper-buttons">
        <Button onClick={ScrollTop} type="rounded" hidden={scrollY < 300}>
          <ArrowUpIcon />
        </Button>
        <Button onClick={darkmode.toggle} type="rounded">
          <BulbIcon />
        </Button>
      </div>
      <Navbar scrollY={scrollY} />
      <Component {...pageProps} />
    </>
  )
}
