import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import styles from '@styles/components/Carousel/Carousel.module.scss'
import Button from '@components/Button'
import Icon from '@components/Icon'

type Props = {
  children: React.ReactNode
  transparentBackground?: boolean
  fullHeight?: boolean
}

const Carousel: React.FC<Props> = ({
  children,
  transparentBackground,
  fullHeight
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const numberChildren = React.Children.count(children)

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0
    } else if (newIndex >= numberChildren) {
      newIndex = numberChildren - 1
    }

    setActiveIndex(newIndex)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  })

  let classNames = [
    styles.carousel,
    transparentBackground && styles['carousel--transparent'],
    fullHeight && styles['carousel--full-height']
  ].join(' ')

  return (
    <div className={classNames} {...handlers}>
      <div className={styles.wrapper}>
        <div
          className={styles.inner}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {children}
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
          disabled={activeIndex == numberChildren - 1}
        >
          <Icon name="arrowForward" small />
        </Button>
      </div>
      {numberChildren > 1 && (
        <ul className={styles['slick-dots']}>
          {[...Array(numberChildren)].map((item, index) => {
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
      )}
    </div>
  )
}

export default Carousel
