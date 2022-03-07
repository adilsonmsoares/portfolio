import Button from '@components/Button'
import Icon from '@components/Icon'
import Navbar from '@components/Navbar'
import { usePageLoaded } from '@hooks/usePageLoaded'
import React from 'react'
import useDarkMode from 'use-dark-mode'

type Props = {
  scrollSmooth?: boolean
}

const Layout: React.FC<Props> = ({ children, scrollSmooth }) => {
  const darkmode = useDarkMode(true)
  const loaded = usePageLoaded()

  const setSmoothScroll = (scrollSmooth?: boolean) => {
    if (typeof window !== 'undefined') {
      scrollSmooth && document.documentElement.classList.add('scroll-smooth')
      !scrollSmooth &&
        document.documentElement.classList.remove('scroll-smooth')
    }
  }
  setSmoothScroll(scrollSmooth)

  return (
    <>
      <div className="helper-buttons">
        <Button onClick={darkmode.toggle} type="circular" htmlElement="div">
          {loaded && <Icon name={darkmode.value ? 'sun' : 'moon'} small />}
        </Button>
      </div>
      <Navbar />
      {children}
      <footer>
        <div className="footer-content">
          <div>Designed and developed Adilson Soares</div>
          <div>All Rights Reserved</div>
        </div>
      </footer>
    </>
  )
}

Layout.defaultProps = {
  scrollSmooth: false
}

export default Layout
