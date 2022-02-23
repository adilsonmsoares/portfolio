import styles from '@styles/containers/Contact.module.scss'
import Typhography from '@components/Typhography'
import Container from '@components/Container'
import useData from '@hooks/useData'
import { PersonalModel } from '@shared/types'
import Icon from '@components/Icon'
import { useState } from 'react'
import Button from '@components/Button'

export default function ContactMe() {
  const data = useData<PersonalModel>('personal.json')
  const [acceptPrivacypolicy, setAcceptPrivacypolicy] = useState(false)

  return (
    <Container
      sectionId="contact"
      page
      className={styles['contact-me-container']}
    >
      <Typhography type="title" color="primary" strong upperCase header>
        Get in touch
      </Typhography>
      <div className={styles.content}>
        <div className={styles.info}>
          <Typhography type="title" color="primary" strong>
            Let's build something amazing.
          </Typhography>
          <Typhography type="sub-title">{data.location}</Typhography>
          <div className={styles['links']}>
            {Object.keys(data.contacts).map(key => (
              <a
                href={`${key === 'email' ? 'mailto:' : ''}${
                  data.contacts[key]
                }`}
                target="_blank"
                key={key}
              >
                <Icon name={key} />
              </a>
            ))}
          </div>
        </div>
        <div className={styles['card-message']}>
          <Typhography type="title" color="primary" upperCase>
            To doubt
          </Typhography>
          <Typhography type="title" color="primary" upperCase strong>
            or
          </Typhography>
          <Typhography type="title" color="primary" upperCase>
            Work together
          </Typhography>
          <Typhography type="sub-sub-title">Send me a message</Typhography>
          <div className={styles.footer}>
            <Typhography type="sub-sub-title">
              I'll try my best to get back to you!
            </Typhography>
          </div>
        </div>
      </div>
    </Container>
  )
}
