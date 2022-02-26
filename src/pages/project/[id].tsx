import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'
import useData from '@hooks/useData'
import { DetailViewModel } from '@shared/types'
import DetailViewer from '@components/DetailViewer'

function ExperienceDetails({
  data
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <DetailViewer data={data} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let { id } = context.query
  let list = useData<DetailViewModel[]>('projects.json')
  let data = list.find(e => e.id === id)

  return {
    props: { data }
  }
}

export default ExperienceDetails
