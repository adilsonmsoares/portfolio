import React from 'react'
import { useEffect, useState } from 'react'
import styles from '@styles/components/navbar/Navbar.module.scss'
import Link from 'next/link'

type Props = {
  scrollY: number
}

export default function Navbar({ scrollY }: Props) {
  const [IsNavOpen, setIsNavOpen] = useState(false)

  const closeNav = () => {
    if (IsNavOpen) setIsNavOpen(!IsNavOpen)
  }

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
              <a className="nav-link" href="#aboutme">
                About
              </a>
            </li>
            <li className={styles['nav-item']} onClick={closeNav}>
              <a className="nav-link" href="#education">
                Education
              </a>
            </li>
            <li className={styles['nav-item']} onClick={closeNav}>
              <a className="nav-link disabled" href="#">
                Skills
              </a>
            </li>
            <li className={styles['nav-item']} onClick={closeNav}>
              <a className="nav-link disabled" href="#">
                Experience
              </a>
            </li>
            <li className={styles['nav-item']} onClick={closeNav}>
              <a className="nav-link disabled" href="#">
                Projects
              </a>
            </li>
            <li className={styles['nav-item']} onClick={closeNav}>
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
