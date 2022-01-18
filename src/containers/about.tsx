import useData from '@hooks/useData'
import { PersonalData } from '@shared/types'
import styles from '@styles/containers/About.module.scss'
import Typhography from '@components/typhography/Typhography'

export default function Education() {
  const data = useData<PersonalData>('personal.json')

  return (
    <section
      className={['container', styles['about-page']].join(' ')}
      id="aboutme"
    >
      <Typhography type="title" color="primary" strong upperCase header>
        About Me
      </Typhography>
      <div>
        {data.description.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </div>
    </section>
  )
}
