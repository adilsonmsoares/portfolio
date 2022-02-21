import { useEffect, useState } from 'react'
import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'
import useData from '@hooks/useData'
import { DetailViewModel } from '@shared/types'
import DetailViewer from '@components/DetailViewer'

function ExperienceDetails({
  data
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 0) // wait to setup load
  }, [])

  return <DetailViewer isLoading={isLoading} data={data} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let { id } = context.query
  let list = useData<DetailViewModel[]>('experiences.json')
  let data = list.find(e => e.id === id)

  return {
    props: { data }
  }
}

export default ExperienceDetails