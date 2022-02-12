import React from 'react'
import styles from '@styles/components/Timeline.module.scss'
import { ThumbnailViewModel } from '@shared/types'
import Link from 'next/link'
import Typhography from '@components/Typhography'

type Props = {
  data: ThumbnailViewModel
  page: string
}

export default function ThumbnailCard({ data, page }: Props) {
  return <div className={styles.thumbnail}>{data.id}</div>
}
