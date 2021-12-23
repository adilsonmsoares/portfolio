import React from 'react'
import styles from '@styles/components/Button/FloatingButton.module.scss'

type Props = {
  disabled?: boolean
  floating: 'left' | 'right'
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
    <div className={classNames} {...{ onClick, disabled }}>
      {children}
    </div>
  )
}

export default FloatingButton
