import React from 'react'
import useDarkMode from 'use-dark-mode'
import Navbar from '@components/Navbar'
import Button from '@components/Button'
import Loading from '@components/Loading'
import Icon from '@components/Icon'

type Props = {
  isLoading?: boolean
  hideNavbar?: boolean
}

const Layout: React.FC<Props> = ({ children, isLoading, hideNavbar }) => {
  const darkmode = useDarkMode(true)

  return (
    <>
      <div className="helper-buttons">
        <Button onClick={darkmode.toggle} type="circular" htmlElement="div">
          <Icon name="bulb" small />
        </Button>
      </div>
      {!hideNavbar && <Navbar />}
      {isLoading && <Loading />}
      {!isLoading && children}
      <footer>
        <div>
          <div>Adilson Soares © Copyright 2020</div>
          <div>All Rights Reserved</div>
        </div>
      </footer>
    </>
  )
}

Layout.defaultProps = {
  isLoading: false,
  hideNavbar: false
}

export default Layout
