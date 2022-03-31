import Typhography from '@components/Typhography'
import { DetailViewModel } from '@shared/types'
import styles from '@styles/components/Timeline.module.scss'
import Link from 'next/link'
import React from 'react'

type Props = {
  data: DetailViewModel[]
  page?: string
}

export default function Timeline({ data, page }: Props) {
  const renderBoxContent = (item: DetailViewModel) => {
    return (
      <>
        <div className={styles.main}>
          <div className={styles.title}>
            <Typhography type="sub-title" color="special" strong>
              {item.title}
            </Typhography>
            <Typhography type="sub-sub-title">{item.entity.name}</Typhography>
          </div>
          <Typhography type="sub-sub-title">
            {item.startDate}
            {item.endDate && ` - ${item.endDate}`}
          </Typhography>
        </div>
        <div className={styles.triangle}></div>
      </>
    )
  }

  return (
    <div className={styles.timeline}>
      <div className={styles.container}>
        {data.map((item, index) => {
          return (
            <div key={index} className={styles.bubble}>
              {page ? (
                <Link href={`/${page}/${item.id}`}>
                  <a className={styles.box}>{renderBoxContent(item)}</a>
                </Link>
              ) : (
                <div className={styles.box}>{renderBoxContent(item)}</div>
              )}
              <div className={styles.dot}></div>
            </div>
          )
        })}
      </div>
      <div className={styles.line}></div>
    </div>
  )
}
