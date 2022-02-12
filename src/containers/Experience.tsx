import useData from '@hooks/useData'
import { SimpleCardViewModel } from '@shared/types'
import Typhography from '@components/Typhography'
import Container from '@components/Container'
import CardList from '@components/Card/CardList'

export default function Experience() {
  const data = useData<SimpleCardViewModel[]>('experiences.json')

  return (
    <Container sectionId="experience" page>
      <Typhography type="title" color="primary" strong upperCase header>
        Experience
      </Typhography>
      <CardList data={data} page="experience" />
    </Container>
  )
}
