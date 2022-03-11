import Container from '@components/Container'
import Icon from '@components/Icon'
import Typhography from '@components/Typhography'
import useData from '@hooks/useData'
import { ErrorViewModel } from '@shared/types'
import styles from '@styles/containers/Error.module.scss'
type Props = {
  errorType: string
}

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Error({ errorType }: Props) {
  const data = useData<ErrorViewModel>('error.json')

  return (
    <Container
      sectionId="error"
      className={styles['error-container']}
      page
      fullScreen
    >
      <div className={styles['alert-icon']}>
        <Icon name="alert" />
      </div>
      <div className={styles.main}>
        <Typhography type="sub-sub-title" upperCase>
          {errorType}
        </Typhography>
        <Typhography type="title" color="primary" strong header>
          {data[errorType].title}
        </Typhography>
        <p>{data[errorType].description}</p>
      </div>
    </Container>
  )
}
