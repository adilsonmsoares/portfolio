import React from 'react'

import styles from '@styles/components/Button/Button.module.scss'

type Props = {
  disabled?: boolean
  onClick: () => void
}

const Button: React.FC<Props> = ({ disabled, onClick, children }) => {
  return (
    <button className={styles.default} {...{ onClick, disabled }}>
      {children}
    </button>
  )
}

export default Button
