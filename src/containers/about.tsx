import useData from '@hooks/useData'
import { PersonalData } from '@shared/types'

export default function Education() {
  const data = useData<PersonalData>('personal.json')

  return (
    <section className="container" id="aboutme">
      <div className="typhography typhography-title typhography-header typhography--primary typhography--uppercase">
        About Me
      </div>
      <div>
        {data.description.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </div>
    </section>
  )
}
