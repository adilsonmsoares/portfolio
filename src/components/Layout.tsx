import Button from '@components/Button'
import Icon from '@components/Icon'
import Loading from '@components/Loading'
import Navbar from '@components/Navbar'
import React, { useEffect, useState } from 'react'
import useDarkMode from 'use-dark-mode'

type Props = {
  scrollSmooth?: boolean
}

const Layout: React.FC<Props> = ({ children, scrollSmooth }) => {
  const darkmode = useDarkMode(true)

  const setSmoothScroll = (scrollSmooth?: boolean) => {
    if (typeof window !== 'undefined') {
      scrollSmooth && document.documentElement.classList.add('scroll-smooth')
      !scrollSmooth &&
        document.documentElement.classList.remove('scroll-smooth')
    }
  }

  const onRefreshPage = () => {
    localStorage.setItem('lastHistoryIdx', '-1')
  }

  const onPopStateEvent = () => {
    popStateEventTriggered = true
    localStorage.setItem('lastHistoryIdx', window.history.state.idx)
  }

  var popStateEventTriggered = false
  useEffect(() => {
    window.addEventListener('beforeunload', onRefreshPage)
    window.addEventListener('popstate', onPopStateEvent)

    return () => {
      if (!popStateEventTriggered) {
        localStorage.setItem(
          'lastHistoryIdx',
          String(window.history.state.idx - 1)
        )
      }

      window.removeEventListener('beforeunload', onRefreshPage)
      window.removeEventListener('popstate', onPopStateEvent)
    }
  }, [])

  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    if (
      window.history.state.idx ===
      Number(localStorage.getItem('lastHistoryIdx'))
    ) {
      return
    }

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1200)

    return () => {
      setIsLoading(false)
    }
  }, [])

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
  scrollSmooth: false
}

export default Layout
