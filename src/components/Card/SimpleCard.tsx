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
    <Link href={`/${page}/${data.id}`}>
      <a className={styles['card']}>
        <div className={styles['main-info']}>
          <div className={styles.header}>
            <Typhography type="sub-title" color="special" strong>
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
        </div>
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
      </a>
    </Link>
  )
}
