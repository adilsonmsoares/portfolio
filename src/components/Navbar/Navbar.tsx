import React from 'react'
import { useEffect, useState } from 'react'
import styles from '@styles/components/Navbar/Navbar.module.scss'
// import Logo from '@assets/Logo.svg'
import Link from 'next/link'

type Props = {}

export default function Navbar(props: Props) {
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <nav
      className={[styles.navbar, scrollY && styles['navbar--scrolled']].join(
        ' '
      )}
    >
      <div className={['container', styles.wrapper].join(' ')}>
        <div className={styles['navbar-brand']}>
          <Link href="/">
            <a>{/* <Logo /> */}</a>
          </Link>
        </div>
        <button
          className={[
            styles['navbar-toggle'],
            isMenuOpen && styles['navbar-toggle--show']
          ].join(' ')}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={styles['toggle-line']}></span>
          <span className={styles['toggle-line']}></span>
          <span className={styles['toggle-line']}></span>
        </button>
        <div
          className={[
            styles['navbar-collapse'],
            isMenuOpen && styles['navbar-collapse--show']
          ].join(' ')}
        >
          <ul className={styles['navbar-nav']}>
            <li className={styles['nav-item']}>
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className={styles['nav-item']}>
              <a className="nav-link" href="#">
                Education
              </a>
            </li>
            <li className={styles['nav-item']}>
              <a className="nav-link disabled" href="#">
                Skills
              </a>
            </li>
            <li className={styles['nav-item']}>
              <a className="nav-link disabled" href="#">
                Experience
              </a>
            </li>
            <li className={styles['nav-item']}>
              <a className="nav-link disabled" href="#">
                Projects
              </a>
            </li>
            <li className={styles['nav-item']}>
              <a className="nav-link disabled" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
