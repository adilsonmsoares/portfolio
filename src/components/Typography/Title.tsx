import React from 'react'
import styles from '@styles/components/Typograph/Title.module.scss'

type Props = {
  disabled?: boolean
  floating?: 'left' | 'right'
  floatingCenter?: boolean
  onClick: () => void
}

const Title: React.FC<Props> = ({ children }) => {
  var classNames = [].join(' ')

  return (
    <button className={classNames} {...{}}>
      {children}
    </button>
  )
}

export default Title
