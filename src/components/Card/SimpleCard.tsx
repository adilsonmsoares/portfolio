import React from 'react'
import styles from '@styles/components/Card.module.scss'
import { DetailViewModel } from '@shared/types'
import Link from 'next/link'
import useHorizontalScroll from '@hooks/useScrollHorizontal'
import Typhography from '@components/Typhography'

type Props = {
  data: DetailViewModel
  page: string
}

export default function SimpleCard({ data, page }: Props) {
  return (
    <div className={styles['simple-card']}>
      <Link href={`/${page}/${data.id}`}>
        <a className={styles['main-info']}>
          <div className={styles.header}>
            <Typhography type="sub-title" color="primary" strong upperCase>
              {data.title}
            </Typhography>
            <div className={styles['sub-header']}>
              <Typhography type="sub-sub-title">{data.entity.name}</Typhography>
              <Typhography type="sub-sub-title">
                {data.startDate} - {data.endDate}
              </Typhography>
            </div>
          </div>
          <div className={styles.description}>
            {data.sectionDescription[0].description[0]}
          </div>
        </a>
      </Link>
      <div className={styles['entity-logo']}>
        {data.entity.logoUrl ? (
          <img src={data.entity.logoUrl} alt={data.entity.name + ' Logo'} />
        ) : (
          <span>No Logo Available</span>
        )}
      </div>
    </div>
  )
}
