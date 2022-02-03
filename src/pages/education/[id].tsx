import { useEffect, useState } from 'react'
import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'
import useData from '@hooks/useData'
import { ViewModel } from '@shared/types'
import DetailViewer from '@components/DetailViewer'

function EducationDetails({
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
  let list = useData<ViewModel[]>('education.json')
  let data = list.find(e => e.id === id)

  return {
    props: { data }
  }
}

export default EducationDetails
