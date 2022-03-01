import Container from 'components/Container'
import Typhography from 'components/Typhography'
import useData from 'hooks/useData'
import { PersonalModel } from 'shared/types'

export default function About() {
  const data = useData<PersonalModel>('personal.json')

  return (
    <Container sectionId="aboutme" page>
      <Typhography type="title" color="primary" strong upperCase header>
        About Me
      </Typhography>
      <div>
        {data.description.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </div>
    </Container>
  )
}
