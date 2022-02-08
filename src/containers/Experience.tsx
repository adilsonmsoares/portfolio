import useData from '@hooks/useData'
import { DetailViewModel } from '@shared/types'
import Timeline from '@components/Timeline'
import Typhography from '@components/Typhography'
import Container from '@components/Container'

export default function Experience() {
  const data = useData<DetailViewModel[]>('experience.json')

  return (
    <Container sectionId="experience" page>
      <Typhography type="title" color="primary" strong upperCase header>
        Experience
      </Typhography>
      <Timeline data={data} page="experience" />
    </Container>
  )
}
