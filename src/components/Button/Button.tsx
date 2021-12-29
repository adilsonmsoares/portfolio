import React from 'react'
import styles from '@styles/components/Button/Button.module.scss'

type Props = {
  type?: 'primary'
  disabled?: boolean
  onClick: () => void
}

const Button: React.FC<Props> = ({ disabled, type, onClick, children }) => {
  var classNames = [styles.btn, type && styles[`btn-${type}`]].join(' ')

  return (
    <button className={classNames} {...{ onClick, disabled }}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  type: 'primary'
}

export default Button
