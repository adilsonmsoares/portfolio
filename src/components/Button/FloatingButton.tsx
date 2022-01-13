import React from 'react'
import styles from '@styles/components/button/FloatingButton.module.scss'

type Props = {
  floating: 'left' | 'right'
  disabled?: boolean
  centerVertically?: boolean
  onClick: () => void
}

const FloatingButton: React.FC<Props> = ({
  disabled,
  floating,
  centerVertically,
  onClick,
  children
}) => {
  var classNames = [
    styles['btn'],
    styles['btn-floating'],
    styles[`btn-floating--${floating}`],
    centerVertically && styles['btn-floating--center-vertically']
  ].join(' ')

  return (
    <button className={classNames} {...{ onClick, disabled }}>
      {children}
    </button>
  )
}

FloatingButton.defaultProps = {
  disabled: false,
  centerVertically: false,
  floating: 'right'
}

export default FloatingButton
