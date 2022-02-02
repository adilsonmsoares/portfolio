import useData from '@hooks/useData'
import { ViewerData } from '@shared/types'
import styles from '@styles/containers/Education.module.scss'
import Timeline from '@components/Timeline'
import Typhography from '@components/Typhography'
import Container from '@components/Container'

export default function Education() {
  const data = useData<ViewerData[]>('education.json')

  return (
    <Container
      sectionId="education"
      className={styles['education-container']}
      page
    >
      <Typhography type="title" color="primary" strong upperCase header>
        Education
      </Typhography>
      <Timeline data={data} page="education" />
    </Container>
  )
}
