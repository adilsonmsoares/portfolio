import Button from '@components/Button'
import Carousel from '@components/Carousel/Carousel'
import CarouselItem from '@components/Carousel/CarouselItem'
import Icon from '@components/Icon'
import Layout from '@components/Layout'
import Typhography from '@components/Typhography'
import { DetailViewModel } from '@shared/types'
import styles from '@styles/components/DetailViewer.module.scss'

type Props = {
  data: DetailViewModel | undefined
}

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function DetailViewer({ data }: Props) {
  return (
    <Layout page={data?.title}>
      <div className={['container container-page', styles['viewer']].join(' ')}>
        <div className={styles.header}>
          <div className={styles.info}>
            <Typhography type="sub-sub-title" upperCase>
              {data?.entity.name}
            </Typhography>
            <Typhography type="sub-sub-title" upperCase>
              {data?.startDate} - {data?.endDate}
            </Typhography>
          </div>
          <Typhography type="title" color="special" strong upperCase>
            {data?.title}
          </Typhography>
        </div>
        <div className={styles.main}>
          {data?.images && (
            <Carousel>
              {data.images.map((image, index) => {
                return (
                  <CarouselItem key={index}>
                    <img src={prefix + image.url} alt={image.alt} />
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
                    color="special"
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
              htmlElement="a"
              href={data?.visitButton.url}
              textStrong
              textUpper
              roundedCorner
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
