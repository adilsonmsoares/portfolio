import React from 'react'
import useDarkMode from 'use-dark-mode'
import Navbar from '@components/Navbar'
import Button from '@components/Button'
import Icon from '@components/Icon'

type Props = {}

const Layout: React.FC<Props> = ({ children }) => {
  const darkmode = useDarkMode(true)

  return (
    <>
      <div className="helper-buttons">
        <Button onClick={darkmode.toggle} type="circular" htmlElement="div">
          <Icon name="bulb" small />
        </Button>
      </div>
      <Navbar />
      {children}
      <footer>
        <div>
          <div>Adilson Soares © Copyright 2020</div>
          <div>All Rights Reserved</div>
        </div>
      </footer>
    </>
  )
}

Layout.defaultProps = {}

export default Layout
