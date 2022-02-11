import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import Link from 'next/link'
import styles from '@styles/components/Card.module.scss'
import { DetailViewModel } from '@shared/types'
import Typhography from '@components/Typhography'
import Button from '@components/Button'
import Icon from '@components/Icon'
import SimpleCard from './SimpleCard'
import ThumbnailCard from './ThumbnailCard'

type Props = {
  data: DetailViewModel[]
  page: string
  type?: 'simple' | 'thumbnail'
}

const CardList: React.FC<Props> = ({ data, page, type }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const maxPerSlide = 3
  const maxSlide = Math.ceil(data.length / maxPerSlide)

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0
    } else if (newIndex >= maxSlide) {
      newIndex = maxSlide - 1
    }

    setActiveIndex(newIndex)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  })

  const renderCards = (slideIndex: number) => {
    return data
      .slice(slideIndex * maxPerSlide, slideIndex * maxPerSlide + maxPerSlide)
      .map((item, index) => {
        return type === 'simple' ? (
          <SimpleCard data={item} page={page} key={index} />
        ) : (
          <ThumbnailCard data={item} page={page} key={index} />
        )
      })
  }
  const renderDots = () => {
    return [...Array(maxSlide)].map((item, index) => {
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
    })
  }

  return (
    <div className={styles['card-list']} {...handlers}>
      <div className={styles.wrapper}>
        <div
          className={styles.inner}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {[...Array(maxSlide)].map((item, index) => {
            return (
              <div key={index} className={styles.item}>
                {renderCards(index)}
              </div>
            )
          })}
        </div>
      </div>
      <ul className={styles['slick-dots']}>{renderDots()}</ul>
    </div>
  )
}

CardList.defaultProps = {
  type: 'simple'
}

export default CardList
