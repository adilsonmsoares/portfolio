import Favicon from '@assets/favicon_transparent.svg'
import styles from '@styles/components/Loading.module.scss'
import React from 'react'

export default function Loading() {
  return (
    <div className={styles['loarder-container']}>
      <Favicon />
      <div className={styles['loader']}>
        <div className={styles['progressor']}></div>
      </div>
    </div>
  )
}
