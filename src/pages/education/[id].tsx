import DetailViewer from 'components/DetailViewer'
import useData from 'hooks/useData'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { DetailViewModel } from 'shared/types'

function EducationDetails({
  data
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <DetailViewer data={data} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let { id } = context.query
  let list = useData<DetailViewModel[]>('education.json')
  let data = list.find(e => e.id === id)

  return {
    props: { data }
  }
}

export default EducationDetails
