import useData from '@hooks/useData'
import { ViewerData } from '@shared/types'
import styles from '@styles/containers/Education.module.scss'
import Timeline from '@components/list/Timeline'

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
      <div className="typhography typhography-title typhography--strong typhography-header typhography--primary typhography--uppercase">
        Education
      </div>
      <Timeline data={data} page="education" />
    </section>
  )
}
