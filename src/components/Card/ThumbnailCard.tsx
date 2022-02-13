import React from 'react'
import styles from '@styles/components/Card/Thumbnail.module.scss'
import { ThumbnailCardViewModel } from '@shared/types'
import Link from 'next/link'
import Typhography from '@components/Typhography'

type Props = {
  data: ThumbnailCardViewModel
  page: string
}

export default function ThumbnailCard({ data, page }: Props) {
  return (
    <Link href={`/${page}/${data.id}`}>
      <a className={styles.thumbnail}>
        <div className={styles.main}>
          <Typhography type="sub-title" color="primary" upperCase strong>
            {data.title}
          </Typhography>
          <hr />
          {data.stack.map((item, index) => {
            return (
              <Typhography
                key={index}
                type="sub-sub-title"
                color="primary"
                upperCase
                strong
              >
                {item}
              </Typhography>
            )
          })}
        </div>
        <div className={styles['image-container']}>
          <img src={data.images[0].url} alt={data.images[0].alt + ' Logo'} />
        </div>
      </a>
    </Link>
  )
}
