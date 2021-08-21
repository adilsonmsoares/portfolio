import React from 'react'
import Link from 'next/link'

import Logo from '../../../public/images/logo.svg'

import { Header } from '@styles/components/Menu/HeaderMenu'

const HeaderMenu: React.FC = () => {
  return (
    <Header className="header shadow">
      <div className="header__logo">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </div>
      <div className="header__nav">
        <Link href="/">
          <a>About</a>
        </Link>
        <Link href="/">
          <a>Education</a>
        </Link>
        <Link href="/">
          <a>Skills</a>
        </Link>
        <Link href="/">
          <a>Experiences</a>
        </Link>
        <Link href="/">
          <a>Projects</a>
        </Link>
        <Link href="/">
          <a>Contacts</a>
        </Link>
      </div>
    </Header>
  )
}

export default HeaderMenu
