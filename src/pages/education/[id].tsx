import { useEffect, useState } from 'react'
import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'
import useData from '@hooks/useData'
import { ViewerData } from '@shared/types'
import styles from '@styles/pages/Education.module.scss'
import Loading from '@components/loading/Loading'
import Button from '@components/button/Button'
import ExternalLinkIcon from '@assets/icons/ExternalLink.svg'

function EducationDetails({
  data
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000) // wait to setup load
  }, [])

  return isLoading ? (
    <Loading />
  ) : (
    <div
      className={[
        'container container-page container-full-screen',
        styles['education-page']
      ].join(' ')}
      id="education"
    >
      <div className={styles.header}>
        <div className="typhography typhography-title typhography--strong typhography--primary typhography--uppercase">
          {data?.id}
        </div>
        <div className={styles.info}>
          <span className="typhography typhography-sub-sub-title typhography--primary typhography--uppercase">
            {data?.entity}
          </span>
          <span className="typhography typhography-sub-sub-title typhography--primary typhography--uppercase">
            {data?.startDate} - {data?.endDate}
          </span>
        </div>
      </div>
      <div className={styles.main}>
        {data?.sectionDescription.map((section, index) => {
          return (
            <div key={index} className={styles.description}>
              {section.title && (
                <div
                  className="typhography typhography-sub-sub-title typhography--strong typhography--primary typhography--uppercase"
                  key={index}
                >
                  {section.title}
                </div>
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
