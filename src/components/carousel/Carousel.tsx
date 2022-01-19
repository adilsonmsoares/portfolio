import React, { useEffect, useState } from 'react'
import styles from '@styles/components/carousel/Carousel.module.scss'
import Image from 'next/image'

type Props = {
  images: [
    {
      url: string
      alt: string
    }
  ]
}

export default function Carousel({ images }: Props) {
  return (
    <div className={styles.carousel}>
      {images.map((image, index) => {
        return (
          <Image
            key={index}
            src={image.url}
            alt={image.alt}
            layout="intrinsic"
            width={50}
            height={50}
            objectFit="cover"
          />
        )
      })}
    </div>
  )
}
