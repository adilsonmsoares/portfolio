import React from 'react'
import styles from '@styles/components/typhography/Typhography.module.scss'

type Props = {
  type: 'title' | 'sub-title' | 'sub-sub-title'
  color?: 'default' | 'primary'
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
    header && styles[`typhography-header`],
    strong && styles[`typhography--strong`],
    upperCase && styles[`typhography--uppercase`]
  ].join(' ')

  return <div className={classNames}>{children}</div>
}

Typhography.defaultProps = {
  color: 'default',
  header: false,
  strong: false,
  upperCase: false
}

export default Typhography
