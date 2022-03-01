import React from 'react'
import styles from 'styles/components/Carousel/Carousel.module.scss'

type Props = {
  children: React.ReactNode
}

export default function CarouselItem({ children }: Props) {
  return <div className={styles.item}>{children}</div>
}
