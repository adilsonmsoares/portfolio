import React from 'react'
import styles from '@styles/components/Timeline.module.scss'
import { DetailViewModel } from '@shared/types'
import Link from 'next/link'
import useHorizontalScroll from '@hooks/useScrollHorizontal'
import Typhography from '@components/Typhography'

type Props = {
  data: DetailViewModel[]
  page: string
}

export default function Timeline({ data, page }: Props) {
  const scrollRef = useHorizontalScroll()

  return (
    <div className={styles.timeline}>
      <div className={styles.container} ref={scrollRef}>
        {data.map((item, index) => {
          return (
            <div key={index} className={styles.bubble}>
              <div className={styles.box}>
                <Link href={`/${page}/${item.id}`}>
                  <a className={styles.main}>
                    <div>
                      <Typhography type="sub-title" color="primary" strong>
                        {item.title}
                      </Typhography>
                      <Typhography type="sub-sub-title">
                        {item.entity.name}
                      </Typhography>
                    </div>
                    <Typhography type="sub-sub-title">
                      {item.startDate}
                      {item.endDate && ` - ${item.endDate}`}
                    </Typhography>
                  </a>
                </Link>
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
