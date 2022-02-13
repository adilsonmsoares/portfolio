import useData from '@hooks/useData'
import { ThumbnailCardViewModel } from '@shared/types'
import Typhography from '@components/Typhography'
import Container from '@components/Container'
import styles from '@styles/containers/Project.module.scss'
import ThumbnailCard from '@components/Card/ThumbnailCard'
import useHorizontalScroll from '@hooks/useScrollHorizontal'

export default function Project() {
  const data = useData<ThumbnailCardViewModel[]>('projects.json')
  const scrollRef = useHorizontalScroll()

  return (
    <Container sectionId="project" page className={styles['project-container']}>
      <Typhography type="title" color="primary" strong upperCase header>
        Projects
      </Typhography>
      <div className={styles.content} ref={scrollRef}>
        {data.map((item, index) => {
          return <ThumbnailCard data={item} page="project" key={index} />
        })}
      </div>
    </Container>
  )
}
