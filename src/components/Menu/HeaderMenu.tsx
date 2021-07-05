import React from 'react'

import Logo from '../../../public/images/logo.svg'

import { Menu } from '@styles/components/Menu/HeaderMenu'

const HeaderMenu: React.FC = () => {
  return (
    <Menu className="header container shadow">
      <div className="header__logo">
        <a href="/">
          <Logo />
        </a>
      </div>
      <div className="header__nav">
        <a className="active" href="">
          About
        </a>
        <a href="">Education</a>
        <a href="">Skills</a>
        <a href="">Experiences</a>
        <a href="">Projects</a>
        <a href="">Contacts</a>
      </div>
    </Menu>
  )
}

export default HeaderMenu
