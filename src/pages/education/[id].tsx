import { useEffect, useState } from 'react'
import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'
import useData from '@hooks/useData'
import { ViewerData } from '@shared/types'
import styles from '@styles/pages/Education.module.scss'
import Button from '@components/button/Button'
import ExternalLinkIcon from '@assets/icons/ExternalLink.svg'
import Layout from '@components/layout/Layout'
import Typhography from '@components/typhography/Typhography'
import Image from 'next/image'
import Carousel from '@components/carousel/Carousel'

function EducationDetails({
  data
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 0) // wait to setup load
  }, [])

  return (
    <Layout isLoading={isLoading}>
      <div
        className={['container container-page', styles['education-page']].join(
          ' '
        )}
        id="education"
      >
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let { id } = context.query
  let list = useData<ViewerData[]>('education.json')
  let data = list.find(e => e.id === id)

  return {
    props: { data }
  }
}

export default EducationDetails
