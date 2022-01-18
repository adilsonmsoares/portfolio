import React, { useEffect, useState } from 'react'
import styles from '@styles/components/list/Timeline.module.scss'
import { ViewerData } from '@shared/types'
import Link from 'next/link'

type Props = {
  data: ViewerData[]
  page: string
}

export default function Timeline({ data, page }: Props) {
  return (
    <div className={styles.timeline}>
      <div className={styles.container}>
        {data.map((item, index) => {
          return (
            <div key={index} className={styles.bubble}>
              <div className={styles.box}>
                <div className={styles.main}>
                  <div className="typhography typhography-sub-title typhography--primary typhography--strong">
                    <Link href={`/${page}/${item.id}`}>
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
      <div className={styles.line}></div>
    </div>
  )
}
