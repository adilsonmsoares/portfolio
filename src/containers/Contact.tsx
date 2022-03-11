import Container from '@components/Container'
import Icon from '@components/Icon'
import Typhography from '@components/Typhography'
import useData from '@hooks/useData'
import { PersonalModel } from '@shared/types'
import styles from '@styles/containers/Contact.module.scss'

export default function Contact() {
  const data = useData<PersonalModel>('personal.json')

  return (
    <Container
      sectionId="contact"
      page
      className={styles['contact-me-container']}
    >
      <div className={styles.content}>
        <div className={styles.info}>
          <Typhography type="title" color="primary" strong header>
            Let's build something amazing
          </Typhography>
          <Typhography type="sub-title">Feel free to reach out</Typhography>
          <div className={styles['links']}>
            {Object.keys(data.contacts).map(key => (
              <a
                href={`${key === 'email' ? 'mailto:' : ''}${
                  data.contacts[key]
                }`}
                target={key === 'email' ? '' : '_blank'}
                key={key}
              >
                <Icon name={key} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
