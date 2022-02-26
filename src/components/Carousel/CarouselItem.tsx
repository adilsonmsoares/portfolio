import styles from '@styles/components/Carousel/Carousel.module.scss'
import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function CarouselItem({ children }: Props) {
  return <div className={styles.item}>{children}</div>
}
