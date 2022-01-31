import TwitterIcon from '@assets/icons/twitter.svg'
import LinkedinIcon from '@assets/icons/linkedin.svg'
import GitHub from '@assets/icons/github.svg'
import styles from '@styles/containers/Home.module.scss'
import { PersonalData } from '@shared/types'
import useData from '@hooks/useData'
import Typhography from '@components/Typhography'

export default function Home() {
  const data = useData<PersonalData>('personal.json')

  return (
    <div
      className={[
        'container container-full-screen',
        styles['home-container']
      ].join(' ')}
    >
      <div className={styles.main}>
        <div className={styles.header}>
          <Typhography type="title" color="primary" strong upperCase>
            {data.title}
          </Typhography>
          <Typhography type="sub-title" color="primary">
            {data.subtitle}
          </Typhography>
        </div>
        <div className={styles.description}>{data.shortDescription}</div>
        <div className={styles.contacts}>
          {Object.keys(data.contacts).map((key, index) => (
            <a href={data.contacts[key]} target="_blank" key={key}>
              {key === 'linkedin' ? (
                <LinkedinIcon />
              ) : key === 'twitter' ? (
                <TwitterIcon />
              ) : (
                <GitHub />
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
