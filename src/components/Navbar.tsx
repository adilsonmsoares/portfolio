import React from 'react'
import { useEffect, useState } from 'react'
import styles from '@styles/components/Navbar.module.scss'
import Link from 'next/link'

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0)
  const [IsNavOpen, setIsNavOpen] = useState(false)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  const closeNav = () => {
    if (IsNavOpen) setIsNavOpen(!IsNavOpen)
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
      <div className={styles.wrapper}>
        <Link href="/">
          <a className={styles['navbar-brand']}>
            <span>adilson</span>
            <span>soares</span>
          </a>
        </Link>
        <button
          className={[
            styles['navbar-toggle'],
            IsNavOpen && styles['navbar-toggle--show']
          ].join(' ')}
          onClick={() => setIsNavOpen(!IsNavOpen)}
        >
          <span className={styles['toggle-line']}></span>
          <span className={styles['toggle-line']}></span>
          <span className={styles['toggle-line']}></span>
        </button>
        <div
          className={[
            styles['navbar-collapse'],
            IsNavOpen && styles['navbar-collapse--show']
          ].join(' ')}
        >
          <ul className={styles['navbar-nav']}>
            <li className={styles['nav-item']} onClick={closeNav}>
              <a className="nav-link" href="/#aboutme">
                About
              </a>
            </li>
            <li className={styles['nav-item']} onClick={closeNav}>
              <a className="nav-link" href="/#education">
                Education
              </a>
            </li>
            <li className={styles['nav-item']} onClick={closeNav}>
              <a className="nav-link disabled" href="/#skills">
                Skills
              </a>
            </li>
            <li className={styles['nav-item']} onClick={closeNav}>
              <a className="nav-link disabled" href="/#experience">
                Experience
              </a>
            </li>
            <li className={styles['nav-item']} onClick={closeNav}>
              <a className="nav-link disabled" href="/#projects">
                Projects
              </a>
            </li>
            <li className={styles['nav-item']} onClick={closeNav}>
              <a className="nav-link disabled" href="/#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}