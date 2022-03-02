import DetailViewer from '@components/DetailViewer'
import useData from '@hooks/useData'
import { DetailViewModel } from '@shared/types'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function ExperienceDetails() {
  const [data, setdata] = useState<DetailViewModel>()
  const router = useRouter()

  useEffect(() => {
    let { id } = router.query
    let list = useData<DetailViewModel[]>('projects.json')
    let data = list.find(e => e.id === id)
    setdata(data)
  })

  return <DetailViewer data={data} />
}
