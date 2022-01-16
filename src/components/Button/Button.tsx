import React from 'react'
import styles from '@styles/components/button/Button.module.scss'

type Props = {
  type: 'default' | 'rounded'
  color: 'primary'
  disabled?: boolean
  onClick: () => void
}

const Button: React.FC<Props> = ({
  disabled,
  color,
  type,
  onClick,
  children
}) => {
  var classNames = [
    styles.btn,
    type && styles[`btn-${type}`],
    color && styles[`btn-${type}--${color}`]
  ].join(' ')

  return (
    <button className={classNames} {...{ onClick, disabled }}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'default',
  color: 'primary',
  disabled: false
}

export default Button
