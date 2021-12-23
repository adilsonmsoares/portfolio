import React from 'react'
import styles from '@styles/components/Button/Button.module.scss'

type Props = {
  disabled?: boolean
  type?: 'primary'
  onClick: () => void
}

const Button: React.FC<Props> = ({ disabled, type, onClick, children }) => {
  var classNames = [styles.btn, type && styles[`btn--${type}`]].join(' ')

  return (
    <button className={classNames} {...{ onClick, disabled }}>
      {children}
    </button>
  )
}

export default Button
