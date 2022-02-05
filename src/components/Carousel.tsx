import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import styles from '@styles/components/Carousel.module.scss'
import Button from '@components/Button'
import Icon from '@components/Icon'

type Props = {
  images: [
    {
      url: string
      alt: string
    }
  ]
}

export default function Carousel({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState(0)

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0
    } else if (newIndex >= images.length) {
      newIndex = images.length - 1
    }

    setActiveIndex(newIndex)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  })

  return (
    <div className={styles.carousel} {...handlers}>
      <div className={styles.wrapper}>
        <div
          className={styles.inner}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((image, index) => {
            return (
              <div key={index} className={styles.item}>
                <img src={image.url} alt={image.alt} />
              </div>
            )
          })}
        </div>
        <Button
          type="circular"
          htmlElement="div"
          onClick={() => {
            updateIndex(activeIndex - 1)
          }}
          className={[
            styles['btn-indicator'],
            styles['btn-indicator--back']
          ].join(' ')}
          disabled={activeIndex == 0}
        >
          <Icon name="arrowBack" small />
        </Button>
        <Button
          type="circular"
          htmlElement="div"
          onClick={() => {
            updateIndex(activeIndex + 1)
          }}
          className={[
            styles['btn-indicator'],
            styles['btn-indicator--forward']
          ].join(' ')}
          disabled={activeIndex == images.length - 1}
        >
          <Icon name="arrowForward" small />
        </Button>
      </div>
      <ul className={styles['slick-dots']}>
        {images.map((item, index) => {
          return (
            <li
              key={index}
              className={[
                styles.dot,
                activeIndex == index && styles['active']
              ].join(' ')}
              onClick={() => updateIndex(index)}
            />
          )
        })}
      </ul>
    </div>
  )
}
