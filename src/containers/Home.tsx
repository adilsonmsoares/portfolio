import Container from '@components/Container'
import Icon from '@components/Icon'
import Typhography from '@components/Typhography'
import useData from '@hooks/useData'
import { PersonalModel } from '@shared/types'
import styles from '@styles/containers/Home.module.scss'

export default function Home() {
  const data = useData<PersonalModel>('personal.json')

  return (
    <Container sectionId="home" className={styles['home-container']} fullScreen>
      <div className={styles.header}>
        <Typhography type="title" color="primary" strong upperCase header>
          {data.title}
        </Typhography>
        <Typhography type="sub-title" color="primary">
          {data.subtitle}
        </Typhography>
      </div>
      <div className={styles.description}>{data.shortDescription}</div>
      <div className={styles.contacts}>
        {Object.keys(data.contacts).map(key => (
          <a
            href={(key === 'email' ? 'mailto:' : '') + data.contacts[key]}
            {...(key !== 'email' && { target: '_blank' })}
            key={key}
          >
            <Icon name={key} />
          </a>
        ))}
      </div>
    </Container>
  )
}
