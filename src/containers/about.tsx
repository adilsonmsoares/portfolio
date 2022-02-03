import useData from '@hooks/useData'
import { PersonalData } from '@shared/types'
import Typhography from '@components/Typhography'
import Container from '@components/Container'

export default function Education() {
  const data = useData<PersonalData>('personal.json')

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
