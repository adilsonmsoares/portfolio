import useData from '@hooks/useData'
import { ViewerData } from '@shared/types'
import styles from '@styles/containers/Education.module.scss'
import Timeline from '@components/Timeline'
import Typhography from '@components/Typhography'

export default function Education() {
  const data = useData<ViewerData[]>('education.json')

  return (
    <section
      className={[
        'container container-page',
        styles['education-container']
      ].join(' ')}
      id="education"
    >
      <Typhography type="title" color="primary" strong upperCase header>
        Education
      </Typhography>
      <Timeline data={data} page="education" />
    </section>
  )
}
