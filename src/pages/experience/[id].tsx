import DetailViewer from '@components/DetailViewer'
import useData from '@hooks/useData'
import { DetailViewModel } from '@shared/types'
import {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType
} from 'next'
import { ParsedUrlQuery } from 'querystring'

const list = useData<DetailViewModel[]>('experiences.json')

function ExperienceDetail({
  data
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <DetailViewer data={data} />
}

export async function getStaticPaths(context: GetStaticPathsContext) {
  const paths = list.map(item => {
    return {
      params: { id: item.id }
    }
  })

  return { paths, fallback: false }
}

export function getStaticProps(context: GetStaticPropsContext) {
  const { id } = context.params as ParsedUrlQuery
  let data = list.find(e => e.id === id)

  return { props: { data } }
}

export default ExperienceDetail
