import { DetailViewModel } from '@shared/types'
import styles from '@styles/components/DetailViewer.module.scss'
import Button from '@components/Button'
import Layout from '@components/Layout'
import Typhography from '@components/Typhography'
import Carousel from '@components/Carousel/Carousel'
import CarouselItem from '@components/Carousel/CarouselItem'
import Icon from '@components/Icon'

type Props = {
  data: DetailViewModel | undefined
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
              {data?.entity.name}
            </Typhography>
            <Typhography type="sub-sub-title" color="primary" upperCase>
              {data?.startDate} - {data?.endDate}
            </Typhography>
          </div>
        </div>
        <div className={styles.main}>
          {data?.images && (
            <Carousel>
              {data.images.map((image, index) => {
                return (
                  <CarouselItem key={index}>
                    <img src={image.url} alt={image.alt} />
                  </CarouselItem>
                )
              })}
            </Carousel>
          )}
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
              <Icon name="externalLink" small />
              <span>{data?.visitButton.text}</span>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  )
}
