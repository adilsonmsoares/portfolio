import useData from '@hooks/useData'
import { ViewModel } from '@shared/types'
import Timeline from '@components/Timeline'
import Typhography from '@components/Typhography'
import Container from '@components/Container'

export default function Education() {
  const data = useData<ViewModel[]>('education.json')

  return (
    <Container sectionId="education" page>
      <Typhography type="title" color="primary" strong upperCase header>
        Education
      </Typhography>
      <Timeline data={data} page="education" />
    </Container>
  )
}
