import React from 'react'
import useDarkMode from 'use-dark-mode'
import Navbar from '@components/navbar/Navbar'
import Button from '@components/button/Button'
import BulbIcon from '@assets/icons/bulb.svg'
import Loading from '@components/loading/Loading'

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
          <BulbIcon />
        </Button>
      </div>
      {!hideNavbar && <Navbar />}
      {isLoading && <Loading />}
      {!isLoading && children}
    </>
  )
}

Layout.defaultProps = {
  isLoading: false,
  hideNavbar: false
}

export default Layout
