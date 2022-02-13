import useData from '@hooks/useData'
import { SimpleCardViewModel } from '@shared/types'
import styles from '@styles/containers/Experience.module.scss'
import Typhography from '@components/Typhography'
import Container from '@components/Container'
import CarouselItem from '@components/Carousel/CarouselItem'
import Carousel from '@components/Carousel/Carousel'
import SimpleCard from '@components/Card/SimpleCard'

export default function Experience() {
  const data = useData<SimpleCardViewModel[]>('experiences.json')
  const maxPerSlide = 3
  const maxSlide = Math.ceil(data.length / maxPerSlide)

  const renderCards = (slideIndex: number) => {
    return data
      .slice(slideIndex * maxPerSlide, slideIndex * maxPerSlide + maxPerSlide)
      .map((item, index) => {
        return <SimpleCard data={item} page="experience" key={index} />
      })
  }

  return (
    <Container
      sectionId="experience"
      page
      className={styles['experience-container']}
    >
      <Typhography type="title" color="primary" strong upperCase header>
        Experience
      </Typhography>
      <Carousel transparentBackground fullHeight>
        {[...Array(maxSlide)].map((item, index) => {
          return (
            <CarouselItem key={index}>
              <div className={styles['card-list']}>{renderCards(index)}</div>
            </CarouselItem>
          )
        })}
      </Carousel>
    </Container>
  )
}
