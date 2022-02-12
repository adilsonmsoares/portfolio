import useData from '@hooks/useData'
import { ThumbnailViewModel } from '@shared/types'
import Typhography from '@components/Typhography'
import Container from '@components/Container'
import CardList from '@components/Card/CardList'

export default function Project() {
  const data = useData<ThumbnailViewModel[]>('projects.json')

  return (
    <Container sectionId="project" page>
      <Typhography type="title" color="primary" strong upperCase header>
        Projects
      </Typhography>
      <CardList data={data} page="project" type="thumbnail" />
    </Container>
  )
}
