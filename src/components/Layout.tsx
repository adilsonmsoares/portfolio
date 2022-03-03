import Button from '@components/Button'
import Icon from '@components/Icon'
import Loading from '@components/Loading'
import Navbar from '@components/Navbar'
import React from 'react'
import useDarkMode from 'use-dark-mode'

type Props = {
  isLoading?: boolean
  scrollSmooth?: boolean
}

const Layout: React.FC<Props> = ({ children, isLoading, scrollSmooth }) => {
  const darkmode = useDarkMode(true)

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
          <Icon name="bulb" small />
        </Button>
      </div>
      <Navbar />
      {isLoading && <Loading />}
      {!isLoading && children}
      <footer>
        <div>
          <div>Designed and developed Adilson Soares</div>
          <div>All Rights Reserved</div>
        </div>
      </footer>
    </>
  )
}

Layout.defaultProps = {
  isLoading: false,
  scrollSmooth: false
}

export default Layout
