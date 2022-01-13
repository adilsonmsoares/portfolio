import TwitterIcon from '@assets/icons/twitter.svg'
import LinkedinIcon from '@assets/icons/linkedin.svg'
import GitHub from '@assets/icons/github.svg'
import styles from '@styles/containers/Home.module.scss'
import { PersonalData } from '@shared/types'
import useData from '@hooks/useData'

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
          <div className="typhography typhography-title typhography--strong typhography--primary typhography--uppercase">
            {data.title}
          </div>
          <div className="typhography typhography-sub-title typhography--primary">
            {data.subtitle}
          </div>
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
