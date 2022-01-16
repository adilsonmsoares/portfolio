import React from 'react'
import styles from '@styles/components/button/Button.module.scss'

type Props = {
  type: 'default' | 'rounded'
  color?: 'primary'
  disabled?: boolean
  hidden?: boolean
  onClick: () => void
}

const Button: React.FC<Props> = ({
  type,
  color,
  disabled,
  hidden,
  onClick,
  children
}) => {
  var classNames = [
    styles.btn,
    hidden && styles[`btn--hidden`],
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
  disabled: false,
  hidden: false
}

export default Button
