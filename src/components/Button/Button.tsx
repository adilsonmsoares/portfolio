import React from 'react'
import styles from '@styles/components/Button/Button.module.scss'

type Props = {
  disabled?: boolean
  special?: boolean
  floating?: 'left' | 'right'
  floatingCenter?: boolean
  onClick: () => void
}

const Button: React.FC<Props> = ({
  disabled,
  special,
  floating,
  floatingCenter,
  onClick,
  children
}) => {
  var classNames = [
    styles.button,
    special && styles['button-special'],
    floating && styles['button-floating'],
    floating && styles[`button-floating-${floating}`],
    floating && floatingCenter && styles['button-floating-center']
  ].join(' ')

  return (
    <button className={classNames} {...{ onClick, disabled }}>
      {children}
    </button>
  )
}

export default Button
