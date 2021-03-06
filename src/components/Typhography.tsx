import styles from '@styles/components/Typhography.module.scss'
import React from 'react'

type Props = {
  type: 'title' | 'sub-title' | 'sub-sub-title'
  color?: 'default' | 'primary' | 'special'
  header?: boolean
  strong?: boolean
  upperCase?: boolean
}

const Typhography: React.FC<Props> = ({
  children,
  type,
  color,
  strong,
  header,
  upperCase
}) => {
  var classNames = [
    styles.typhography,
    type && styles[`typhography-${type}`],
    color && styles[`typhography--${color}`],
    strong && styles[`typhography--strong`],
    upperCase && styles[`typhography--uppercase`]
  ].join(' ')

  return (
    <>
      {header && <h1 className={classNames}>{children}</h1>}
      {!header && <div className={classNames}>{children}</div>}
    </>
  )
}

Typhography.defaultProps = {
  color: 'default',
  header: false,
  strong: false,
  upperCase: false
}

export default Typhography
