import React from 'react'
import { useEffect, useState } from 'react'
import styles from '@styles/components/Navbar/Navbar.module.scss'
import Link from 'next/link'

type Props = {}

export default function Navbar(props: Props) {
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={[styles.navbar, scrollY && styles['navbar--scrolled']].join(
        ' '
      )}
    >
      <div className={['container', styles.wrapper].join(' ')}>
        <Link href="/">
          <a className={styles['navbar-brand']}>
            <span>adilson</span>
            <span>soares</span>
          </a>
        </Link>
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
