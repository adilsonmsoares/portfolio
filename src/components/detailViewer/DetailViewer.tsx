import { ViewerData } from '@shared/types'
import ExternalLinkIcon from '@assets/icons/ExternalLink.svg'
import Button from '@components/button/Button'
import Layout from '@components/layout/Layout'
import Typhography from '@components/typhography/Typhography'
import Carousel from '@components/carousel/Carousel'
import styles from '@styles/components/detailViewer/DetailViewer.module.scss'

type Props = {
  data: ViewerData | undefined
  isLoading: boolean
}

export default function DetailViewer({ data, isLoading }: Props) {
  return (
    <Layout isLoading={isLoading}>
      <div className={['container container-page', styles['viewer']].join(' ')}>
        <div className={styles.header}>
          <Typhography type="title" color="primary" strong upperCase>
            {data?.title}
          </Typhography>
          <div className={styles.info}>
            <Typhography type="sub-sub-title" color="primary" upperCase>
              {data?.entity}
            </Typhography>
            <Typhography type="sub-sub-title" color="primary" upperCase>
              {data?.startDate} - {data?.endDate}
            </Typhography>
          </div>
        </div>
        <div className={styles.main}>
          {data?.images && <Carousel images={data?.images} />}
          {data?.sectionDescription.map((section, index) => {
            return (
              <div key={index} className={styles.description}>
                {section.title && (
                  <Typhography
                    type="sub-title"
                    color="primary"
                    strong
                    upperCase
                  >
                    {section.title}
                  </Typhography>
                )}
                {section.description.map((description, index) => {
                  return <p key={index}>{description}</p>
                })}
              </div>
            )
          })}
        </div>
        {data?.visitButton && (
          <div className={styles.footer}>
            <Button
              type="default"
              htmlElement="a"
              href={data?.visitButton.url}
              textStrong={true}
              textUpper={true}
            >
              <ExternalLinkIcon />
              <span>{data?.visitButton.text}</span>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  )
}
