import Typhography from '@components/Typhography'
import { SimpleCardViewModel } from '@shared/types'
import styles from '@styles/components/Card/SimpleCard.module.scss'
import Link from 'next/link'
import React from 'react'

type Props = {
  data: SimpleCardViewModel
  page: string
}

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function SimpleCard({ data, page }: Props) {
  return (
    <div className={styles['card']}>
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
          <img
            src={prefix + data.entity.logoUrl}
            alt={data.entity.name + ' Logo'}
          />
        ) : (
          <span>No Logo Available</span>
        )}
      </div>
    </div>
  )
}
