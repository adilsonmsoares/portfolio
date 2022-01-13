import React, { useEffect, useState } from 'react'
import styles from '@styles/components/list/Timeline.module.scss'
import { ViewerData } from '@shared/types'
import Link from 'next/link'
type Props = {
  data: ViewerData[]
}

export default function Timeline({ data }: Props) {
  return (
    <div className={styles.timeline}>
      {data.map((item, index) => {
        return (
          <div key={index} className={styles.bubble}>
            <div className={styles.box}>
              <div className={styles.main}>
                <div className="typhography typhography-sub-title typhography--primary typhography--strong">
                  <Link href={`education/${item.id}`}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="typhography typhography-sub-sub-title">
                  {item.entity}
                </div>
              </div>
              <span className="typhography typhography-sub-sub-title">
                {item.startDate}
                {item.endDate && ` - ${item.endDate}`}
              </span>
              <div className={styles.triangle}></div>
            </div>
            <div className={styles.dot}></div>
          </div>
        )
      })}
    </div>
  )
}
