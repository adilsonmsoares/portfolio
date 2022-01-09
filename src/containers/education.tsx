import styles from '@styles/containers/Education.module.scss'

export default function Education() {
  return (
    <section
      className={['container', styles['education-container']].join(' ')}
      id="education"
    >
      <div className="typhography typhography-title typhography-header typhography--primary typhography--uppercase">
        Education
      </div>
    </section>
  )
}
