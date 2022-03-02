import DetailViewer from '@components/DetailViewer'
import useData from '@hooks/useData'
import { DetailViewModel } from '@shared/types'
import { useEffect, useState } from 'react'

export default function EducationDetails() {
  const [data, setdata] = useState<DetailViewModel>()

  useEffect(() => {
    let id = window.location.pathname.split('/').pop()
    let list = useData<DetailViewModel[]>('education.json')
    let data = list.find(e => e.id === id)
    setdata(data)
  })

  return <DetailViewer data={data} />
}
