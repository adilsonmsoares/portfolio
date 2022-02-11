import React from 'react'
import styles from '@styles/components/Timeline.module.scss'
import { DetailViewModel } from '@shared/types'
import Link from 'next/link'
import useHorizontalScroll from '@hooks/useScrollHorizontal'
import Typhography from '@components/Typhography'

type Props = {
  data: DetailViewModel
  page: string
}

export default function ThumbnailCard({ data, page }: Props) {
  return <div>{data.id}</div>
}
