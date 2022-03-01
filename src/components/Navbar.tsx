import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from 'styles/components/Navbar.module.scss'

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0)
  const [IsNavOpen, setIsNavOpen] = useState(false)

  const updateScrollYValue = () => {
    setScrollY(window.scrollY)
  }

  const closeNav = () => {
    if (IsNavOpen) setIsNavOpen(!IsNavOpen)
  }

  useEffect(() => {
    updateScrollYValue()

    window.addEventListener('scroll', updateScrollYValue)
    return () => {
      window.removeEventListener('scroll', updateScrollYValue)
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
          <a className={styles['navbar-brand']} onClick={closeNav}>
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
              <Link href="/#aboutme">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className={styles['nav-item']} onClick={closeNav}>
              <Link href="/#education">
                <a className="nav-link">Education</a>
              </Link>
            </li>
            <li className={styles['nav-item']} onClick={closeNav}>
              <Link href="/#skills">
                <a className="nav-link">Skills</a>
              </Link>
            </li>
            <li className={styles['nav-item']} onClick={closeNav}>
              <Link href="/#experience">
                <a className="nav-link">Experience</a>
              </Link>
            </li>
            <li className={styles['nav-item']} onClick={closeNav}>
              <Link href="/#projects">
                <a className="nav-link">Projects</a>
              </Link>
            </li>
            <li className={styles['nav-item']} onClick={closeNav}>
              <Link href="/#contact">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
